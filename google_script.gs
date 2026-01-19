
const SPREADSHEET_ID = "16w4EzHhTyS1CnTfJOWE7QQNM0o2mMQIqePpPK8TEYrg";

function doGet(e) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const params = e.parameter;
  const type = params.type;

  // --- XÁC MINH GIÁO VIÊN ---
  if (type === 'checkTeacher') {
    const idgv = params.idgv;
    const sheet = ss.getSheetByName("idgv");
    if (!sheet) return createResponse("error", "Không tìm thấy sheet idgv");
    const data = sheet.getDataRange().getValues();
    for (let i = 1; i < data.length; i++) {
      if (data[i][0].toString().trim() === idgv.trim()) {
        return createResponse("success", "OK", { name: data[i][1], link: data[i][2] });
      }
    }
    return createResponse("error", "ID Giáo viên không tồn tại hoặc chưa kích hoạt bản quyền!");
  }

  // --- LẤY TOP 10 ---
  if (type === 'top10') {
    const sheet = ss.getSheetByName("Top10Display");
    if (!sheet) return createResponse("error", "Không tìm thấy sheet Top10Display");
    const lastRow = sheet.getLastRow();
    if (lastRow < 2) return createResponse("success", "Chưa có dữ liệu Top 10", []);
    const values = sheet.getRange(2, 1, Math.min(10, lastRow - 1), 10).getValues();
    const top10 = values.map((row, index) => ({
      rank: index + 1, name: row[0], phoneNumber: row[1], score: row[2], time: row[3], sotk: row[4], bank: row[5], idPhone: row[9]
    }));
    return createResponse("success", "OK", top10);
  }

  // --- LẤY PASS QUIZ ---
  if (type === 'getPass') {
    const sheetList = ss.getSheetByName("danhsach");
    const password = sheetList.getRange("H2").getValue();
    return ContentService.createTextOutput(JSON.stringify({ password: password.toString() })).setMimeType(ContentService.MimeType.JSON);
  }

  return createResponse("error", "Yêu cầu không hợp lệ");
}

function doPost(e) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const lock = LockService.getScriptLock();
  lock.tryLock(15000);

  try {
    const data = JSON.parse(e.postData.contents);
    
    // 1. LƯU MA TRẬN ĐỀ
    if (data.type === 'saveMatrix') {
      let sheet = ss.getSheetByName("matran") || ss.insertSheet("matran");
      if (sheet.getLastRow() === 0) {
        sheet.appendRow(["IdNumber", "makiemtra", "name", "topics", "duration", "numMC", "scoreMC", "mcL3", "mcL4", "numTF", "scoreTF", "tfL3", "tfL4", "numSA", "scoreSA", "saL3", "saL4"]);
      }
      sheet.appendRow([
        data.idNumber, data.makiemtra, data.name, data.topics, data.duration,
        data.numMC, data.scoreMC, data.mcL3, data.mcL4,
        data.numTF, data.scoreTF, data.tfL3, data.tfL4,
        data.numSA, data.scoreSA, data.saL3, data.saL4
      ]);
      return createResponse("success", "Đã lưu ma trận đề thành công!");
    }

    // 2. LƯU CẤU HÌNH ĐỀ TỪ WORD
    if (data.type === 'saveExamFromWord') {
      // Lưu vào sheet Exams
      let sheetExams = ss.getSheetByName("Exams") || ss.insertSheet("Exams");
      if (sheetExams.getLastRow() === 0) {
        sheetExams.appendRow(["Exams", "IdNumber", "fulltime", "mintime", "tab", "close", "mcq_pts", "tf_pts", "sa_pts"]);
      }
      sheetExams.appendRow([
        data.config.examCode, data.config.idNumber, data.config.fulltime, 
        data.config.mintime, data.config.tab, data.config.close,
        data.config.mcq_pts, data.config.tf_pts, data.config.sa_pts
      ]);

      // Lưu câu hỏi vào QuestionBank
      let sheetQB = ss.getSheetByName("QuestionBank") || ss.insertSheet("QuestionBank");
      if (sheetQB.getLastRow() === 0) {
        sheetQB.appendRow(["makiemtra", "idNumber", "part", "type", "question", "options", "answer", "explanation"]);
      }
      data.questions.forEach(q => {
        sheetQB.appendRow([
          data.config.examCode, data.config.idNumber, q.part, q.type,
          q.question, JSON.stringify(q.o || []), q.a, q.explanation || ""
        ]);
      });
      return createResponse("success", "Đã import đề từ Word thành công!");
    }

    // (Các logic cũ giữ nguyên: rating, quiz, ketqua...)
    return createResponse("success", "OK");
  } catch (error) {
    return createResponse("error", error.message);
  } finally {
    lock.releaseLock();
  }
}

function createResponse(status, message, data) {
  const output = { status: status, message: message };
  if (data) output.data = data;
  return ContentService.createTextOutput(JSON.stringify(output)).setMimeType(ContentService.MimeType.JSON);
}
