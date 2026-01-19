const SPREADSHEET_ID = "16w4EzHhTyS1CnTfJOWE7QQNM0o2mMQIqePpPK8TEYrg";

function clearWeeklyQuizData() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName("ketquaQuiZ");
  if (sheet && sheet.getLastRow() > 1) {
    sheet.deleteRows(2, sheet.getLastRow() - 1);
    console.log("Dữ liệu ketquaQuiZ đã được dọn dẹp.");
  }
}

function doGet(e) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const params = e.parameter;
  const type = e.parameter.type;

  // --- TRƯỜNG HỢP 0: LẤY TOP 10 ---
  if (type === 'top10') {
    const sheet = ss.getSheetByName("Top10Display");
    if (!sheet) return createResponse("error", "Không tìm thấy sheet Top10Display");
    const lastRow = sheet.getLastRow();
    if (lastRow < 2) return createResponse("success", "Chưa có dữ liệu Top 10", []);
    
    const values = sheet.getRange(2, 1, Math.min(10, lastRow - 1), 7).getValues();
    const top10 = values.map((row, index) => ({
      rank: index + 1,
      name: row[0],
      phoneNumber: row[1],
      score: row[2],
      time: row[3],
      sotk: row[4],
      bank: row[5],
      idPhone: row[10]
    }));
    return createResponse("success", "OK", top10);
  }

  // --- TRƯỜNG HỢP 1: LẤY THỐNG KÊ (RATINGS) ---
  if (type === 'getStats') {
    const stats = { ratings: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }, top10: [] };
    const sheetRate = ss.getSheetByName("danhgia");
    if (sheetRate) {
      const rateData = sheetRate.getDataRange().getValues();
      for (let i = 1; i < rateData.length; i++) {
        const star = parseInt(rateData[i][1]);
        if (star >= 1 && star <= 5) stats.ratings[star]++;
      }
    }
    return createResponse("success", "OK", stats);
  }

  // --- TRƯỜNG HỢP 2: LẤY MẬT KHẨU ---
  if (type === 'getPass') {
    const sheetList = ss.getSheetByName("danhsach");
    const password = sheetList.getRange("H2").getValue();
    return ContentService.createTextOutput(JSON.stringify({ 
      password: password.toString() 
    })).setMimeType(ContentService.MimeType.JSON);
  }

  // --- TRƯỜNG HỢP 3: XÁC MINH THÍ SINH ---
  if (type === 'verifyStudent') {
    const idNumber = params.idnumber;
    const sbd = params.sbd;
    const sheet = ss.getSheetByName("danhsach");
    if (!sheet) return createResponse("error", "Sheet danhsach không tồn tại");
    const data = sheet.getDataRange().getValues();
    for (let i = 1; i < data.length; i++) {
      if (data[i][5].toString().trim() === idNumber.trim() && data[i][0].toString().trim() === sbd.trim()) {
        return createResponse("success", "OK", {
          name: data[i][1],
          class: data[i][2],
          limit: data[i][3],
          limittab: data[i][4],
          taikhoanapp: data[i][6],
          idnumber: idNumber,
          sbd: sbd
        });
      }
    }
    return createResponse("error", "Thí sinh không tồn tại trên hệ thống!Hãy liên hệ giáo viên phụ trách khẩn cấp@");
  }

  // --- TRƯỜNG HỢP 4: LẤY MÃ ĐỀ ---
  if (type === 'getExamCodes') {
    const teacherId = params.idnumber;
    const sheet = ss.getSheetByName("matran");
    if (!sheet) return createResponse("error", "Sheet matran không tồn tại");
    const data = sheet.getDataRange().getValues();
    const results = [];
    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      if (row[0].toString().trim() === teacherId.trim() || row[0].toString() === "SYSTEM") {
        try {
          results.push({
            code: row[1].toString(),
            name: row[2].toString(),
            topics: JSON.parse(row[3]),
            fixedConfig: {
              duration: parseInt(row[4]),
              numMC: JSON.parse(row[5]),
              scoreMC: parseFloat(row[6]),
              mcL3: JSON.parse(row[7]),
              mcL4: JSON.parse(row[8]),
              numTF: JSON.parse(row[9]),
              scoreTF: parseFloat(row[10]),
              tfL3: JSON.parse(row[11]),
              tfL4: JSON.parse(row[12]),
              numSA: JSON.parse(row[13]),
              scoreSA: parseFloat(row[14]),
              saL3: JSON.parse(row[15]),
              saL4: JSON.parse(row[16])
            }
          });
        } catch(err) { console.error("Lỗi parse dòng " + (i+1)); }
      }
    }
    return createResponse("success", "OK", results);
  }

  return createResponse("error", "Yêu cầu không hợp lệ");
} // <--- QUAN TRỌNG: Đóng hàm doGet tại đây

function doPost(e) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const lock = LockService.getScriptLock();
  lock.tryLock(15000);

  try {
    const data = JSON.parse(e.postData.contents);
    
    if (data.type === 'rating') {
      let sheetRate = ss.getSheetByName("danhgia");
      if (!sheetRate) {
        sheetRate = ss.insertSheet("danhgia");      
        
        sheetRate.appendRow(["Timestamp", "stars", "name", "class", "idNumber", "taikhoanapp"]);
      }
      sheetRate.appendRow([new Date(), data.stars, data.name, data.class, data.idNumber, data.comment || "", data.taikhoanapp]);
      return createResponse("success", "OK");
    }

    if (data.type === 'quiz') {
      let sheetQuiz = ss.getSheetByName("ketquaQuiZ");
      if (!sheetQuiz) {
        sheetQuiz = ss.insertSheet("ketquaQuiZ");
        sheetQuiz.appendRow(["Timestamp", "maQuiZ", "name", "class", "school", "phoneNumber", "tongdiem", "fulltime", "sotk", "bank"]);
      }
      sheetQuiz.appendRow([
        new Date(), 
        data.examCode || "QUIZ", 
        data.name || "N/A", 
        data.className || data.class || "",
        data.school || "", 
        data.phoneNumber || "", 
        data.score || 0,
        data.totalTime || "00:00", 
        data.stk || "", 
        data.bank || ""
      ]);
      return createResponse("success", "Đã lưu kết quả Quiz");
    }

    // Mặc định lưu kết quả kiểm tra
    let sheetResult = ss.getSheetByName("ketqua");
    if (!sheetResult) sheetResult = ss.insertSheet("ketqua");
    if (sheetResult.getLastRow() === 0) {
      sheetResult.appendRow(["Timestamp", "makiemtra", "sbd", "name", "class", "tongdiem", "fulltime", "details"]);
    }
    sheetResult.appendRow([new Date(), data.examCode, data.sbd, data.name, data.className, data.score, data.totalTime, JSON.stringify(data.details)]);

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
