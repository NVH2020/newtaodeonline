
import { Question } from './types';

// Giả định questionsBank được nạp từ nguồn dữ liệu khác hoặc đã được định nghĩa
export const questionsBank: Question[] = [
   {
id: 100001,
classTag: "1001.1",
part: "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
type: "mcq",
question: "Trong các phát biểu sau, phát biểu nào là một mệnh đề toán học?",
o: [
"$3$ là số nguyên tố. (Đ 1)",
"B Các bạn hãy làm bài đi!",
"C Con thấp quá!",
"D Hôm nay trời có mưa không?"
],
a: "$3$ là số nguyên tố. (Đ 1)"
},
{
id: 100002,
classTag: "1001.1",
part: "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
type: "mcq",
question: "Cho mệnh đề $P: \"\\forall x \\in \\mathbb{R}, x^2 + 1 > 0\"$. Mệnh đề phủ định của $P$ là:",
o: [
"$\\overline{P}: \"\\exists x \\in \\mathbb{R}, x^2 + 1 \\le 0\"$. (Đ 1)",
"B $\\overline{P}: \"\\forall x \\in \\mathbb{R}, x^2 + 1 \\le 0\"$.",
"C $\\overline{P}: \"\\exists x \\in \\mathbb{R}, x^2 + 1 < 0\"$.",
"D $\\overline{P}: \"\\forall x \\in \\mathbb{R}, x^2 + 1 < 0\"$."
],
a: "$\\overline{P}: \"\\exists x \\in \\mathbb{R}, x^2 + 1 \\le 0\"$. (Đ 1)"
},
{
id: 100003,
classTag: "1001.1",
part: "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
type: "mcq",
question: "Cho tập hợp $A = \\{x \\in \\mathbb{N} \\mid x < 5\\}$. Viết tập hợp $A$ dưới dạng liệt kê các phần tử.",
o: [
"$A = \\{0; 1; 2; 3; 4\\}$. (Đ 1)",
"B $A = \\{1; 2; 3; 4\\}$.",
"C $A = \\{0; 1; 2; 3; 4; 5\\}$.",
"D $A = \\{1; 2; 3; 4; 5\\}$."
],
a: "$A = \\{0; 1; 2; 3; 4\\}$. (Đ 1)"
},
{
id: 100004,
classTag: "1001.1",
part: "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
type: "mcq",
question: "Kí hiệu nào sau đây dùng để chỉ $1,5$ không phải là số nguyên?",
o: [
"$1,5 \\notin \\mathbb{Z}$. (Đ 1)",
"B $1,5 \\in \\mathbb{Z}$.",
"C $1,5 \\subset \\mathbb{Z}$.",
"D $1,5 \\neq \\mathbb{Z}$."
],
a: "$1,5 \\notin \\mathbb{Z}$. (Đ 1)"
},
{
id: 100005,
classTag: "1001.1",
part: "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
type: "mcq",
question: "Cho tập hợp $A = \\{a, b, c\\}$. Số tập con có đúng một phần tử của $A$ là:",
o: [
"3. (Đ 1)",
"B 1.",
"C 6.",
"D 8."
],
a: "3. (Đ 1)"
},
{
id: 100006,
classTag: "1001.1",
part: "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
type: "mcq",
question: "Sử dụng các kí hiệu khoảng, đoạn để viết tập hợp $A = \\{x \\in \\mathbb{R} \\mid 4 \\le x \\le 9\\}$.",
o: [
"$A = [4; 9]$. (Đ 1)",
"B $A = (4; 9)$.",
"C $A = [4; 9)$.",
"D $A = (4; 9]$."
],
a: "$A = [4; 9]$. (Đ 1)"
},
{
id: 100007,
classTag: "1001.1",
part: "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
type: "mcq",
question: "Cho $A = \\{0; 2; 4; 6\\}$ và $B = \\{4; 6; 8; 10\\}$. Tập hợp $A \\setminus B$ là:",
o: [
"$\\{0; 2\\}$. (Đ 1)",
"B $\\{4; 6\\}$.",
"C $\\{8; 10\\}$.",
"D $\\{0; 2; 8; 10\\}$."
],
a: "$\\{0; 2\\}$. (Đ 1)"
},
{
id: 100008,
classTag: "1001.1",
part: "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
type: "mcq",
question: "Cho $A = \\{1; 2; 3\\}$. Tập hợp nào sau đây là tập con của $A$?",
o: [
"$\\{1; 2\\}$. (Đ 1)",
"B $\\{0; 1\\}$.",
"C $\\{1; 2; 3; 4\\}$.",
"D $\\{x \\in \\mathbb{R} \\mid x < 1\\}$."
],
a: "$\\{1; 2\\}$. (Đ 1)"
},
{
id: 100009,
classTag: "1001.1",
part: "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
type: "mcq",
question: "Trong các tập hợp sau, tập hợp nào là tập rỗng?",
o: [
"$\\{x \\in \\mathbb{R} \\mid x^2 + 1 = 0\\}$. (Đ 1)",
"B $\\{x \\in \\mathbb{Q} \\mid x^2 - 4 = 0\\}$.",
"C $\\{x \\in \\mathbb{Z} \\mid |x| < 1\\}$.",
"D $\\{x \\in \\mathbb{N} \\mid x^2 - 2 = 0\\}$."
],
a: "$\\{x \\in \\mathbb{R} \\mid x^2 + 1 = 0\\}$. (Đ 1)"
},
{
id: 100010,
classTag: "1001.1",
part: "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
type: "mcq",
question: "Cho $A = (-2; 3]$. Khẳng định nào sau đây là đúng?",
o: [
"$3 \\in A$. (Đ 1)",
"B $-2 \\in A$.",
"C $4 \\in A$.",
"D $\\{-2; 3\\} \\subset A$."
],
a: "$3 \\in A$. (Đ 1)"
},
{
id: 100011,
classTag: "1001.1",
part: "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
type: "mcq",
question: "Tập hợp $D = $ là:",
o: [
"$[-3; 5]$. (Đ 1)",
"B $[1; 2)$.",
"C $(-3; 5]$.",
"D $[-3; 1]$."
],
a: "$[-3; 5]$. (Đ 1)"
},
{
id: 100012,
classTag: "1001.1",
part: "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
type: "mcq",
question: "Cho hai tập hợp $X$ và $Y$. Phần bù của $Y$ trong $X$ được kí hiệu là $C_X Y$ khi nào?",
o: [
"$Y \\subset X$. (Đ 1)",
"B $X \\subset Y$.",
"C $X = Y$.",
"D $X \\cap Y = \\emptyset$."
],
a: "$Y \\subset X$. (Đ 1)"
},
{
id: 100013,
classTag: "1001.2",
part: "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
type: "mcq",
question: "Cho mệnh đề chứa biến $P(x): \"x^2 - 3x + 2 = 0\"$. Tìm $x$ để $P(x)$ là mệnh đề đúng.",
o: [
"$x = 2$. (Đ 2)",
"B $x = 0$.",
"C $x = -1$.",
"D $x = -2$."
],
a: "$x = 2$. (Đ 2)"
},
{
id: 100014,
classTag: "1001.2",
part: "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
type: "mcq",
question: "Cho tập $A = \\{x \\in \\mathbb{R} \\mid (x^2 - 1)(x^2 + 2) = 0\\}$. Các phần tử của tập $A$ là:",
o: [
"$\\{-1; 1\\}$. (Đ 2)",
"B $\\{-1; 1; \\sqrt{2}; -\\sqrt{2}\\}$.",
"C $\\{1; \\sqrt{2}\\}$.",
"D $\\{-1\\}$."
],
a: "$\\{-1; 1\\}$. (Đ 2)"
},
{
id: 100015,
classTag: "1001.2",
part: "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
type: "mcq",
question: "Cho $A = $ và $B = $. Điều kiện để $A = B$ là:",
o: [
"$m = 1$. (Đ 2)",
"B $m = 3$.",
"C $m = -1$.",
"D $m = 0$."
],
a: "$m = 1$. (Đ 2)"
},
{
id: 100016,
classTag: "1001.2",
part: "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
type: "mcq",
question: "Cho $A = (-\\infty; 2]$ và $B = [2; +\\infty)$. Tập hợp $A \\cap B$ là:",
o: [
"$\\{2\\}$. (Đ 2)",
"B $\\mathbb{R}$.",
"C $\\emptyset$.",
"D $(-\\infty; +\\infty)$."
],
a: "$\\{2\\}$. (Đ 2)"
},
{
id: 100017,
classTag: "1001.2",
part: "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
type: "mcq",
question: "Cho tập hợp $X = \\{1; 2; 3\\}$. Số tập con có 2 phần tử của $X$ là:",
o: [
"3. (Đ 2)",
"B 6.",
"C 8.",
"D 2."
],
a: "3. (Đ 2)"
},
{
id: 100018,
classTag: "1001.2",
part: "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
type: "mcq",
question: "Mệnh đề nào sau đây là sai?",
o: [
"$\\mathbb{Q} \\subset \\mathbb{Z}$. (Đ 2)",
"B $\\mathbb{N} \\subset \\mathbb{Q}$.",
"C $\\mathbb{Z} \\subset \\mathbb{R}$.",
"D $\\mathbb{Q} \\subset \\mathbb{R}$."
],
a: "$\\mathbb{Q} \\subset \\mathbb{Z}$. (Đ 2)"
},
{
id: 100019,
classTag: "1001.2",
part: "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
type: "mcq",
question: "Cho $A$ là tập hợp các số tự nhiên chẵn không lớn hơn 10. Số phần tử của $A$ là:",
o: [
"6. (Đ 2)",
"B 5.",
"C 4.",
"D 11."
],
a: "6. (Đ 2)"
},
{
id: 100020,
classTag: "1001.2",
part: "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
type: "mcq",
question: "Cho $A = \\{x \\in \\mathbb{R} \\mid x^2 - 4x + 3 = 0\\}$ và $B = \\{x \\in \\mathbb{N} \\mid x < 4\\}$. Khẳng định nào đúng?",
o: [
"$A \\subset B$. (Đ 2)",
"B $B \\subset A$.",
"C $A = B$.",
"D $A \\cap B = \\emptyset$"
],
a: "$A \\subset B$. (Đ 2)"
},
{
id: 100021,
classTag: "1001.2",
part: "PHẦN II. Câu trắc nghiệm đúng sai",
type: "true-false",
question: "Cho tập hợp $A = \\{x \\in \\mathbb{Z} \\mid -2 \\le x < 3\\}$. Xét tính đúng sai của các khẳng định sau:",
s: [
{"text": "Tập $A$ có 5 phần tử. (Đ 2)a", "a": true},
{"text": "$-2 \\in A$. (Đ 2)b", "a": true},
{"text": "$3 \\in A$.c", "a": false},
{"text": "$\\{0; 1; 2\\} \\subset A$. (Đ 2)d", "a": true}
]
},
{
id: 100022,
classTag: "1001.2",
part: "PHẦN II. Câu trắc nghiệm đúng sai",
type: "true-false",
question: "Cho hai tập hợp $A = $.",
s: [
{"text": "$A \\cup B = [1; 6]$. (Đ 2)a", "a": true},
{"text": "$A \\cap B = (3; 5)$. (Đ 2)b", "a": true},
{"text": "$A \\setminus B = [1; 3]$. (Đ 2)c", "a": true},
{"text": "$B \\setminus A = [5; 6]$.d", "a": false}
]
},
{
id: 100023,
classTag: "1001.2",
part: "PHẦN II. Câu trắc nghiệm đúng sai",
type: "true-false",
question: "Cho các mệnh đề sau:",
s: [
{"text": "$\\forall x \\in \\mathbb{R}, x^2 \\ge 0$. (Đ 2)a", "a": true},
{"text": "$\\exists x \\in \\mathbb{Q}, x^2 = 2$.b", "a": false},
{"text": "$\\pi$ là một số vô tỉ. (Đ 2)c", "a": true},
{"text": "2025 là số nguyên tố.d", "a": false}
]
},
{
id: 100024,
classTag: "1001.2",
part: "PHẦN II. Câu trắc nghiệm đúng sai",
type: "true-false",
question: "Cho tập hợp $X = \\{x \\in \\mathbb{R} \\mid x^2 - 5x + 6 = 0\\}$.",
s: [
{"text": "$X = \\{2; 3\\}$. (Đ 2)a", "a": true},
{"text": "Tập $X$ có 4 tập con. (Đ 2)b", "a": true},
{"text": "$X \\subset \\mathbb{N}$. (Đ 2)c", "a": true},
{"text": "$X \\cap \\{0; 1; 2\\} = \\emptyset$.d", "a": false}
]
},
{
id: 100025,
classTag: "1001.2",
part: "PHẦN II. Câu trắc nghiệm đúng sai",
type: "true-false",
question: "Cho $V$ là tập hợp các hình vuông, $T$ là tập hợp các hình thoi, $C$ là tập hợp các hình chữ nhật.",
s: [
{"text": "$V \\subset T$. (Đ 2)a", "a": true},
{"text": "$V \\subset C$. (Đ 2)b", "a": true},
{"text": "$T \\cap C = V$. (Đ 2)c", "a": true},
{"text": "$T \\cup C = V$.d", "a": false}
]
},
{
id: 100026,
classTag: "1001.3",
part: "PHẦN II. Câu trắc nghiệm đúng sai",
type: "true-false",
question: "Cho tập hợp $A = $ và $B = (0; 5)$.",
s: [
{"text": "Với $m=1$ thì $A \\subset B$. (Đ 3)a", "a": true},
{"text": "$A \\cap B = \\emptyset$ khi $m \\ge 5$ hoặc $m+2 \\le 0$. (Đ 3)b", "a": true},
{"text": "Có 3 giá trị nguyên của $m$ để $A \\subset B$. (Đ 3)c", "a": true},
{"text": "Nếu $m=0$ thì $A \\cap B = (0; 2]$. (Đ 3)d", "a": true}
]
},
{
id: 100027,
classTag: "1001.3",
part: "PHẦN II. Câu trắc nghiệm đúng sai",
type: "true-false",
question: "Xét các mệnh đề về tập hợp số:",
s: [
{"text": "$C_{\\mathbb{R}} \\mathbb{Q} = \\mathbb{I}$ (tập số vô tỉ). (Đ 3)a", "a": true},
{"text": "$\\mathbb{N}^* \\cap \\mathbb{Z} = \\mathbb{N}^*$. (Đ 3)b", "a": true},
{"text": "$\\mathbb{Q} \\cup \\mathbb{I} = \\mathbb{R}$. (Đ 3)c", "a": true},
{"text": "$\\mathbb{Z} \\setminus \\mathbb{N} = \\{ \\dots, -3, -2, -1 \\}$. (Đ 3)d", "a": true}
]
},
{
id: 100028,
classTag: "1001.3",
part: "PHẦN II. Câu trắc nghiệm đúng sai",
type: "true-false",
question: "Cho phương trình $x^2 + (m+1)x + m = 0$. Gọi $S$ là tập nghiệm của phương trình.",
s: [
{"text": "Với mọi $m$, tập $S$ luôn có ít nhất một phần tử. (Đ 3)a", "a": true},
{"text": "Khi $m=1$, $S = \\{-1\\}$. (Đ 3)b", "a": true},
{"text": "Có giá trị của $m$ để $S$ có 3 phần tử.c", "a": false},
{"text": "$S \\subset \\mathbb{Z}$ khi $m$ là số nguyên. (Đ 3)d", "a": true}
]
},
{
id: 100029,
classTag: "1001.3",
part: "PHẦN II. Câu trắc nghiệm đúng sai",
type: "true-false",
question: "Cho hai khoảng $A = (m-1; m+1)$ và $B = (1; 3)$.",
s: [
{"text": "Độ dài của khoảng $A$ luôn bằng 2. (Đ 3)a", "a": true},
{"text": "Với $m=2$ thì $A = B$. (Đ 3)b", "a": true},
{"text": "$A \\cap B = \\emptyset$ khi $|m-2| \\ge 2$. (Đ 3)c", "a": true},
{"text": "$A \\cup B$ là một khoảng khi và chỉ khi $0 < m < 4$.d", "a": false}
]
},
{
id: 100030,
classTag: "1001.3",
part: "PHẦN II. Câu trắc nghiệm đúng sai",
type: "true-false",
question: "Một nhóm có 20 học sinh, 12 em thích đá bóng, 10 em thích bóng chuyền.  ",
s: [
{"text": "Có ít nhất 2 em thích cả hai môn. (Đ 3)a", "a": true},
{"text": "Nếu có 5 em thích cả hai môn thì có 17 em thích ít nhất một môn. (Đ 3)b", "a": true},
{"text": "Số em thích cả hai môn không thể vượt quá 10. (Đ 3)c", "a": true},
{"text": "Nếu có 2 em không thích môn nào thì có 10 em thích cả hai môn. d", "a": false}
]
},
{
id: 100031,
classTag: "1001.2",
part: "PHẦN III. Câu trắc nghiệm trả lời ngắn",
type: "short-answer",
question: "Cho tập hợp $A = \\{1; 3; 9; 27; 81\\}$. Nếu viết tập $A$ dưới dạng $A = \\{3^n \\mid n \\in \\mathbb{N}, 0 \\le n \\le k\\}$, tìm giá trị của $k$.",
a: "4"
},
{
id: 100032,
classTag: "1001.2",
part: "PHẦN III. Câu trắc nghiệm trả lời ngắn",
type: "short-answer",
question: "Cho $A = \\{1; 2; 3; 4\\}$ và $B = \\{3; 4; 5; 6\\}$. Tập hợp $A \\cup B$ có bao nhiêu phần tử?",
a: "6"
},
{
id: 100033,
classTag: "1001.2",
part: "PHẦN III. Câu trắc nghiệm trả lời ngắn",
type: "short-answer",
question: "Cho hai tập hợp $A = (-2; 4]$ và $B = [0; 5)$. Tính độ dài của đoạn/khoảng là kết quả của phép toán $A \\cap B$.",
a: "4"
},
{
id: 100034,
classTag: "1001.2",
part: "PHẦN III. Câu trắc nghiệm trả lời ngắn",
type: "short-answer",
question: "Một tập hợp có tất cả 64 tập con. Hỏi tập hợp đó có bao nhiêu phần tử?",
a: "6"
},
{
id: 100035,
classTag: "1001.2",
part: "PHẦN III. Câu trắc nghiệm trả lời ngắn",
type: "short-answer",
question: "Tìm số phần tử nguyên của tập hợp $S = \\{x \\in \\mathbb{R} \\mid |x| < 4\\}$.",
a: "7"
},
{
id: 100036,
classTag: "1001.2",
part: "PHẦN III. Câu trắc nghiệm trả lời ngắn",
type: "short-answer",
question: "Cho tập hợp $A = \\{x \\in \\mathbb{Z} \\mid (x^2 - 1)(x-3) = 0\\}$. Tính tổng các phần tử của tập hợp $A$.",
a: "3"
},
{
id: 100037,
classTag: "1001.3",
part: "PHẦN III. Câu trắc nghiệm trả lời ngắn",
type: "short-answer",
question: "Trong một lớp có 45 học sinh, có 30 em thích môn Toán, 20 em thích môn Văn. Biết rằng mỗi học sinh đều thích ít nhất một trong hai môn. Hỏi có bao nhiêu học sinh thích cả hai môn?",
a: "5"
},
{
id: 100038,
classTag: "1001.3",
part: "PHẦN III. Câu trắc nghiệm trả lời ngắn",
type: "short-answer",
question: "Cho hai tập hợp $A = $ và $B = $. Có bao nhiêu giá trị nguyên của $m$ để $A \\subset B$?",
a: "4"
},
{
id: 100039,
classTag: "1001.3",
part: "PHẦN III. Câu trắc nghiệm trả lời ngắn",
type: "short-answer",
question: "Tìm số phần tử của tập hợp $A = \\{n \\in \\mathbb{N} \\mid n < 100, n \\vdots 5\\}$.",
a: "20"
},
{
id: 100040,
classTag: "1001.3",
part: "PHẦN III. Câu trắc nghiệm trả lời ngắn",
type: "short-answer",
question: "Cho tập hợp $X = \\{1; 2; 3\\}$. Tìm số lượng các tập hợp con của $X$ chứa phần tử 1.",
a: "4"
},
{
id: 100041,
classTag: "1001.3",
part: "PHẦN III. Câu trắc nghiệm trả lời ngắn",
type: "short-answer",
question: "Cho $A = (-\\infty; m+2)$ và $B = [4; +\\infty)$. Tìm giá trị nhỏ nhất của $m$ để $A \\cup B = \\mathbb{R}$.",
a: "2"
},
{
id: 100042,
classTag: "1001.4",
part: "PHẦN III. Câu trắc nghiệm trả lời ngắn",
type: "short-answer",
question: "Cho hai tập hợp $A = $ và $B = $. Có bao nhiêu giá trị nguyên của $m \\in $ để $A \\cap B \\neq \\emptyset$?",
a: "7"
},
{
id: 100043,
classTag: "1001.4",
part: "PHẦN III. Câu trắc nghiệm trả lời ngắn",
type: "short-answer",
question: "Tại một hội nghị có 100 đại biểu, trong đó có 70 người nói được tiếng Anh, 60 người nói được tiếng Pháp và 20 người không nói được cả hai thứ tiếng này. Hỏi có bao nhiêu người nói được cả hai thứ tiếng?",
a: "50"
},
{
id: 100044,
classTag: "1001.4",
part: "PHẦN III. Câu trắc nghiệm trả lời ngắn",
type: "short-answer",
question: "Cho hai tập hợp $A = $ và $B = (-1; 1)$. Tìm số giá trị nguyên của $m$ để $A \\cap B$ là một khoảng có độ dài bằng 1.",
a: "2"
},
{
id: 100045,
classTag: "1001.4",
part: "PHẦN III. Câu trắc nghiệm trả lời ngắn",
type: "short-answer",
question: "Cho tập hợp $S = \\{1; 2; 3; 4; 5\\}$. Hỏi có bao nhiêu tập hợp con của $S$ có chứa ít nhất một số chẵn?",
a: "24"
},
  // END10 Kết thúc ID 10
  {
id: 1100001,
classTag: "1101.1",
part: "PHẦN I. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
type: "mcq",
question: "Góc có số đo $180^\\circ$ đổi sang đơn vị radian là.",
o: [
"$\\pi$. (A Đ 1)",
"$\\frac{\\pi}{2}$. (B)",
"$2\\pi$. (C)",
"$\\frac{\\pi}{4}$. (D)"
],
a: "$\\pi$. (A Đ 1)"
},
{
id: 1100002,
classTag: "1101.1",
part: "PHẦN I. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
type: "mcq",
question: "Cho $\\frac{\\pi}{2} < \\alpha < \\pi$. Khẳng định nào sau đây đúng?",
o: [
"$\\sin \\alpha > 0$. (A Đ 1)",
"$\\cos \\alpha > 0$. (B)",
"$\\tan \\alpha > 0$. (C)",
"$\\cot \\alpha > 0$. (D)"
],
a: "$\\sin \\alpha > 0$. (A Đ 1)"
},
{
id: 1100003,
classTag: "1101.1",
part: "PHẦN I. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
type: "mcq",
question: "Công thức nào sau đây là công thức cộng đối với sin?",
o: [
"$\\sin(a+b) = \\sin a \\cos b + \\cos a \\sin b$. (A Đ 1)",
"$\\sin(a+b) = \\sin a \\cos b - \\cos a \\sin b$. (B)",
"$\\sin(a+b) = \\sin a \\sin b + \\cos a \\cos b$. (C)",
"$\\sin(a+b) = \\cos a \\cos b - \\sin a \\sin b$. (D)"
],
a: "$\\sin(a+b) = \\sin a \\cos b + \\cos a \\sin b$. (A Đ 1)"
},
{
id: 1100004,
classTag: "1101.1",
part: "PHẦN I. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
type: "mcq",
question: "Tập xác định của hàm số $y = \\tan x$ là.",
o: [
"$D = \\mathbb{R} \\setminus \\{\\frac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}\\}$. (A Đ 1)",
"$D = \\mathbb{R} \\setminus \\{k\\pi, k \\in \\mathbb{Z}\\}$. (B)",
"$D = \\mathbb{R} \\setminus \\{\\pi + k2\\pi, k \\in \\mathbb{Z}\\}$. (C)",
"$D = \\mathbb{R}$. (D)"
],
a: "$D = \\mathbb{R} \\setminus \\{\\frac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}\\}$. (A Đ 1)"
},
{
id: 1100005,
classTag: "1101.1",
part: "PHẦN I. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
type: "mcq",
question: "Chu kì của hàm số $y = \\cos x$ là.",
o: [
"$2\\pi$. (A Đ 1)",
"$\\pi$. (B)",
"$\\frac{\\pi}{2}$. (C)",
"$4\\pi$. (D)"
],
a: "$2\\pi$. (A Đ 1)"
},
{
id: 1100006,
classTag: "1101.1",
part: "PHẦN I. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
type: "mcq",
question: "Phương trình $\\sin x = \\sin \\alpha$ có các nghiệm là.",
o: [
"$x = \\alpha + k2\\pi; x = \\pi - \\alpha + k2\\pi, k \\in \\mathbb{Z}$. (A Đ 1)",
"$x = \\alpha + k\\pi; x = \\pi - \\alpha + k\\pi, k \\in \\mathbb{Z}$. (B)",
"$x = \\alpha + k2\\pi; x = -\\alpha + k2\\pi, k \\in \\mathbb{Z}$. (C)",
"$x = \\pm \\alpha + k2\\pi, k \\in \\mathbb{Z}$. (D)"
],
a: "$x = \\alpha + k2\\pi; x = \\pi - \\alpha + k2\\pi, k \\in \\mathbb{Z}$. (A Đ 1)"
},
{
id: 1100007,
classTag: "1101.1",
part: "PHẦN I. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
type: "mcq",
question: "Giá trị của biểu thức $\\cos \\frac{\\pi}{3}$ bằng.",
o: [
"$\\frac{1}{2}$. (A Đ 1)",
"$\\frac{\\sqrt{3}}{2}$. (B)",
"$\\frac{\\sqrt{2}}{2}$. (C)",
"$1$. (D)"
],
a: "$\\frac{1}{2}$. (A Đ 1)"
},
{
id: 1100008,
classTag: "1101.1",
part: "PHẦN I. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
type: "mcq",
question: "Hàm số $y = \\sin x$ là hàm số.",
o: [
"Lẻ trên $\\mathbb{R}$. (A Đ 1)",
"Chẵn trên $\\mathbb{R}$. (B)",
"Không chẵn không lẻ. (C)",
"Vừa chẵn vừa lẻ. (D)"
],
a: "Lẻ trên $\\mathbb{R}$. (A Đ 1)"
},
{
id: 1100009,
classTag: "1101.1",
part: "PHẦN I. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
type: "mcq",
question: "Đồ thị hàm số nào sau đây đối xứng qua trục tung $Oy$?",
o: [
"$y = \\cos x$. (A Đ 1)",
"$y = \\sin x$. (B)",
"$y = \\tan x$. (C)",
"$y = \\cot x$. (D)"
],
a: "$y = \\cos x$. (A Đ 1)"
},
{
id: 1100010,
classTag: "1101.1",
part: "PHẦN I. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
type: "mcq",
question: "Nghiệm của phương trình $\\cos x = 1$ là.",
o: [
"$x = k2\\pi, k \\in \\mathbb{Z}$. (A Đ 1)",
"$x = \\frac{\\pi}{2} + k2\\pi, k \\in \\mathbb{Z}$. (B)",
"$x = \\pi + k2\\pi, k \\in \\mathbb{Z}$. (C)",
"$x = k\\pi, k \\in \\mathbb{Z}$. (D)"
],
a: "$x = k2\\pi, k \\in \\mathbb{Z}$. (A Đ 1)"
},
{
id: 1100011,
classTag: "1101.1",
part: "PHẦN I. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
type: "mcq",
question: "Công thức biến đổi tích thành tổng $\\cos a \\cos b$ bằng.",
o: [
"$\\frac{1}{2}[\\cos(a-b) + \\cos(a+b)]$. (A Đ 1)",
"$\\frac{1}{2}[\\cos(a-b) - \\cos(a+b)]$. (B)",
"$\\frac{1}{2}[\\sin(a+b) + \\sin(a-b)]$. (C)",
"$\\cos(a+b) + \\cos(a-b)$. (D)"
],
a: "$\\frac{1}{2}[\\cos(a-b) + \\cos(a+b)]$. (A Đ 1)"
},
{
id: 1100012,
classTag: "1101.1",
part: "PHẦN I. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
type: "mcq",
question: "Trên đường tròn lượng giác, điểm biểu diễn cung có số đo $\\frac{\\pi}{2}$ nằm ở.",
o: [
"Phía trên trục tung. (A Đ 1)",
"Phía dưới trục tung. (B)",
"Bên phải trục hoành. (C)",
"Bên trái trục hoành. (D)"
],
a: "Phía trên trục tung. (A Đ 1)"
},
{
id: 1100013,
classTag: "1101.1",
part: "PHẦN I. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
type: "mcq",
question: "Tập giá trị của hàm số $y = \\sin 2x$ là.",
o: [
"$[-1; 1]$. (A Đ 1)",
"$[-2; 2]$. (B)",
"$[0; 1]$. (C)",
"$\\mathbb{R}$. (D)"
],
a: "$[-1; 1]$. (A Đ 1)"
},
{
id: 1100014,
classTag: "1101.1",
part: "PHẦN I. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
type: "mcq",
question: "Cho $\\sin \\alpha = \\frac{1}{2}$. Tính $\\cos 2\\alpha$.",
o: [
"$\\frac{1}{2}$. (A Đ 1)",
"$0$. (B)",
"$1$. (C)",
"$\\frac{\\sqrt{3}}{2}$. (D)"
],
a: "$\\frac{1}{2}$. (A Đ 1)"
},
{
id: 1100015,
classTag: "1101.1",
part: "PHẦN I. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
type: "mcq",
question: "Phương trình $\\tan x = \\sqrt{3}$ có nghiệm là.",
o: [
"$x = \\frac{\\pi}{3} + k\\pi, k \\in \\mathbb{Z}$. (A Đ 1)",
"$x = \\frac{\\pi}{6} + k\\pi, k \\in \\mathbb{Z}$. (B)",
"$x = \\frac{\\pi}{3} + k2\\pi, k \\in \\mathbb{Z}$. (C)",
"$x = \\frac{\\pi}{6} + k2\\pi, k \\in \\mathbb{Z}$. (D)"
],
a: "$x = \\frac{\\pi}{3} + k\\pi, k \\in \\mathbb{Z}$. (A Đ 1)"
},
{
id: 1100016,
classTag: "1101.1",
part: "PHẦN I. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
type: "mcq",
question: "Trong các hàm số sau, hàm số nào tuần hoàn với chu kì $\\pi$?",
o: [
"$y = \\tan x$. (A Đ 1)",
"$y = \\sin x$. (B)",
"$y = \\cos x$. (C)",
"$y = \\sin \\frac{x}{2}$. (D)"
],
a: "$y = \\tan x$. (A Đ 1)"
},
{
id: 1100017,
classTag: "1101.1",
part: "PHẦN I. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
type: "mcq",
question: "Hệ thức nào sau đây đúng?",
o: [
"$\\sin^2 x + \\cos^2 x = 1$. (A Đ 1)",
"$\\sin x + \\cos x = 1$. (B)",
"$\\sin^2 x - \\cos^2 x = 1$. (C)",
"$\\tan x = \\frac{\\cos x}{\\sin x}$. (D)"
],
a: "$\\sin^2 x + \\cos^2 x = 1$. (A Đ 1)"
},
{
id: 1100018,
classTag: "1101.1",
part: "PHẦN I. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
type: "mcq",
question: "Phương trình $\\cos x = \\cos \\frac{\\pi}{4}$ có nghiệm là.",
o: [
"$x = \\pm \\frac{\\pi}{4} + k2\\pi, k \\in \\mathbb{Z}$. (A Đ 1)",
"$x = \\frac{\\pi}{4} + k2\\pi, k \\in \\mathbb{Z}$. (B)",
"$x = \\frac{\\pi}{4} + k\\pi, k \\in \\mathbb{Z}$. (C)",
"$x = \\pm \\frac{\\pi}{4} + k\\pi, k \\in \\mathbb{Z}$. (D)"
],
a: "$x = \\pm \\frac{\\pi}{4} + k2\\pi, k \\in \\mathbb{Z}$. (A Đ 1)"
},
{
id: 1100019,
classTag: "1101.2",
part: "PHẦN I. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
type: "mcq",
question: "Giá trị lớn nhất của hàm số $y = 3\\sin x - 2$ là.",
o: [
"$1$. (A Đ 2)",
"$5$. (B)",
"$3$. (C)",
"$-2$. (D)"
],
a: "$1$. (A Đ 2)"
},
{
id: 1100020,
classTag: "1101.2",
part: "PHẦN I. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
type: "mcq",
question: "Số nghiệm của phương trình $\\sin x = 0$ trên đoạn [0; 7] là.",
o: [
"$3$. (A Đ 2)",
"$2$. (B)",
"$1$. (C)",
"$4$. (D)"
],
a: "$3$. (A Đ 2)"
},
{
id: 1100021,
classTag: "1101.2",
part: "PHẦN I. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
type: "mcq",
question: "Tìm tập xác định của hàm số $y = \\frac{1}{\\sin x - \\cos x}$.",
o: [
"$D = \\mathbb{R} \\setminus \\{\\frac{\\pi}{4} + k\\pi, k \\in \\mathbb{Z}\\}$. (A Đ 2)",
"$D = \\mathbb{R} \\setminus \\{k\\pi, k \\in \\mathbb{Z}\\}$. (B)",
"$D = \\mathbb{R} \\setminus \\{\\frac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}\\}$. (C)",
"$D = \\mathbb{R} \\setminus \\{\\frac{\\pi}{4} + k2\\pi, k \\in \\mathbb{Z}\\}$. (D)"
],
a: "$D = \\mathbb{R} \\setminus \\{\\frac{\\pi}{4} + k\\pi, k \\in \\mathbb{Z}\\}$. (A Đ 2)"
},
{
id: 1100022,
classTag: "1101.2",
part: "PHẦN I. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
type: "mcq",
question: "Biến đổi biểu thức $\\sin x + \\cos x$ thành dạng tích.",
o: [
"$\\sqrt{2}\\sin(x + \\frac{\\pi}{4})$. (A Đ 2)",
"$\\sqrt{2}\\sin(x - \\frac{\\pi}{4})$. (B)",
"$2\\sin(x + \\frac{\\pi}{4})$. (C)",
"$\\sqrt{2}\\cos(x + \\frac{\\pi}{4})$. (D)"
],
a: "$\\sqrt{2}\\sin(x + \\frac{\\pi}{4})$. (A Đ 2)"
},
{
id: 1100023,
classTag: "1101.2",
part: "PHẦN I. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
type: "mcq",
question: "Nghiệm của phương trình $\\sin(x - \\frac{\\pi}{3}) = \\frac{1}{2}$ là.",
o: [
"$x = \\frac{\\pi}{2} + k2\\pi; x = \\frac{7\\pi}{6} + k2\\pi, k \\in \\mathbb{Z}$. (A Đ 2)",
"$x = \\frac{\\pi}{6} + k2\\pi; x = \\frac{5\\pi}{6} + k2\\pi, k \\in \\mathbb{Z}$. (B)",
"$x = \\frac{\\pi}{2} + k\\pi; x = \\frac{7\\pi}{6} + k\\pi, k \\in \\mathbb{Z}$. (C)",
"$x = k2\\pi, k \\in \\mathbb{Z}$. (D)"
],
a: "$x = \\frac{\\pi}{2} + k2\\pi; x = \\frac{7\\pi}{6} + k2\\pi, k \\in \\mathbb{Z}$. (A Đ 2)"
},
{
id: 1100024,
classTag: "1101.2",
part: "PHẦN I. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
type: "mcq",
question: "Tính $\\sin 2\\alpha$ biết $\\sin \\alpha = \\frac{3}{5}$ và $\\frac{\\pi}{2} < \\alpha < \\pi$.",
o: [
"$-\\frac{24}{25}$. (A Đ 2)",
"$\\frac{24}{25}$. (B)",
"$-\\frac{12}{25}$. (C)",
"$\\frac{12}{25}$. (D)"
],
a: "$-\\frac{24}{25}$. (A Đ 2)"
},
{
id: 1100025,
classTag: "1101.2",
part: "PHẦN I. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
type: "mcq",
question: "Hàm số $y = \\sin x$ đồng biến trên khoảng nào dưới đây?",
o: [
"$(-\\frac{\\pi}{2}; \\frac{\\pi}{2})$. (A Đ 2)",
"$(0; \\pi)$. (B)",
"$(\\frac{\\pi}{2}; \\frac{3\\pi}{2})$. (C)",
"$(\\pi; 2\\pi)$. (D)"
],
a: "$(-\\frac{\\pi}{2}; \\frac{\\pi}{2})$. (A Đ 2)"
},
{
id: 1100026,
classTag: "1101.2",
part: "PHẦN I. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
type: "mcq",
question: "Giải phương trình $\\cos 2x = \\cos x$.",
o: [
"$x = k2\\pi; x = \\frac{k2\\pi}{3}, k \\in \\mathbb{Z}$. (A Đ 2)",
"$x = k\\pi; x = \\frac{k\\pi}{3}, k \\in \\mathbb{Z}$. (B)",
"$x = k2\\pi, k \\in \\mathbb{Z}$. (C)",
"$x = \\frac{k2\\pi}{3}, k \\in \\mathbb{Z}$. (D)"
],
a: "$x = k2\\pi; x = \\frac{k2\\pi}{3}, k \\in \\mathbb{Z}$. (A Đ 2)"
},
{
id: 1100027,
classTag: "1101.2",
part: "PHẦN I. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
type: "mcq",
question: "Tập giá trị của hàm số $y = \\sqrt{3}\\sin 2x - \\cos 2x$ là.",
o: [
"$[-2; 2]$. (A Đ 2)",
"$[-\\sqrt{3}-1; \\sqrt{3}+1]$. (B)",
"$[-1; 1]$. (C)",
"$[0; 2]$. (D)"
],
a: "$[-2; 2]$. (A Đ 2)"
},
{
id: 1100028,
classTag: "1101.2",
part: "PHẦN I. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
type: "mcq",
question: "Phương trình $\\tan(2x + \\frac{\\pi}{4}) = 0$ có nghiệm là.",
o: [
"$x = -\\frac{\\pi}{8} + \\frac{k\\pi}{2}, k \\in \\mathbb{Z}$. (A Đ 2)",
"$x = -\\frac{\\pi}{4} + k\\pi, k \\in \\mathbb{Z}$. (B)",
"$x = \\frac{\\pi}{8} + \\frac{k\\pi}{2}, k \\in \\mathbb{Z}$. (C)",
"$x = -\\frac{\\pi}{8} + k\\pi, k \\in \\mathbb{Z}$. (D)"
],
a: "$x = -\\frac{\\pi}{8} + \\frac{k\\pi}{2}, k \\in \\mathbb{Z}$. (A Đ 2)"
},
{
id: 1100029,
classTag: "1101.2",
part: "PHẦN I. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
type: "mcq",
question: "Tìm $m$ để phương trình $\\sin x = m$ có nghiệm.",
o: [
"$-1 \\le m \\le 1$. (A Đ 2)",
"$m \\ge -1$. (B)",
"$m \\le 1$. (C)",
"$m \\in \\mathbb{R}$. (D)"
],
a: "$-1 \\le m \\le 1$. (A Đ 2)"
},
{
id: 1100030,
classTag: "1101.2",
part: "PHẦN I. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN",
type: "mcq",
question: "Đồ thị hàm số $y = \\sin x$ cắt trục hoành tại các điểm có hoành độ là.  ",
o: [
"$x = k\\pi, k \\in \\mathbb{Z}$. (A Đ 2)",
"$x = \\frac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}$. (B)",
"$x = k2\\pi, k \\in \\mathbb{Z}$. (C)",
"$x = \\frac{\\pi}{2} + k2\\pi, k \\in \\mathbb{Z}$. (D)"
],
a: "$x = k\\pi, k \\in \\mathbb{Z}$. (A Đ 2)"
},
{
id: 1100031,
classTag: "1101.2",
part: "PHẦN II. CÂU TRẮC NGHIỆM ĐÚNG SAI",
type: "true-false",
question: "Cho hàm số $y = \\sin x$.",
s: [
{"text": "Hàm số có tập xác định $D = \\mathbb{R}$. (a Đ 2)", "a": true},
{"text": "Hàm số là hàm số chẵn. (b)", "a": false},
{"text": "Tập giá trị của hàm số là $[-1; 1]$. (c Đ 2)", "a": true},
{"text": "Đồ thị hàm số đi qua điểm $(0; 1)$. (d)", "a": false}
]
},
{
id: 1100032,
classTag: "1101.2",
part: "PHẦN II. CÂU TRẮC NGHIỆM ĐÚNG SAI",
type: "true-false",
question: "Cho phương trình $\\cos x = \\frac{1}{2}$.",
s: [
{"text": "Phương trình có nghiệm $x = \\frac{\\pi}{3} + k2\\pi$. (a Đ 2)", "a": true},
{"text": "Phương trình có nghiệm $x = -\\frac{\\pi}{3} + k\\pi$. (b)", "a": false},
{"text": "Phương trình có nghiệm âm lớn nhất là $-\\frac{\\pi}{3}$. (c Đ 2)", "a": true},
{"text": "Phương trình vô nghiệm. (d)", "a": false}
]
},
{
id: 1100033,
classTag: "1101.2",
part: "PHẦN II. CÂU TRẮC NGHIỆM ĐÚNG SAI",
type: "true-false",
question: "Xét các công thức lượng giác sau.",
s: [
{"text": "$\\cos 2x = 2\\cos^2 x - 1$. (a Đ 2)", "a": true},
{"text": "$\\sin 2x = \\sin x \\cos x$. (b)", "a": false},
{"text": "$\\tan 2x = \\frac{2\\tan x}{1 - \\tan^2 x}$. (c Đ 2)", "a": true},
{"text": "$\\cos 2x = \\sin^2 x - \\cos^2 x$. (d)", "a": false}
]
},
{
id: 1100034,
classTag: "1101.2",
part: "PHẦN II. CÂU TRẮC NGHIỆM ĐÚNG SAI",
type: "true-false",
question: "Cho $\\sin \\alpha = \\frac{4}{5}$ với $0 < \\alpha < \\frac{\\pi}{2}$.",
s: [
{"text": "$\\cos \\alpha = \\frac{3}{5}$. (a Đ 2)", "a": true},
{"text": "$\\tan \\alpha = \\frac{4}{3}$. (b Đ 2)", "a": true},
{"text": "$\\sin(\\alpha + \\pi) = \\frac{4}{5}$. (c)", "a": false},
{"text": "$\\cos 2\\alpha = -\\frac{7}{25}$. (d Đ 2)", "a": true}
]
},
{
id: 1100035,
classTag: "1101.2",
part: "PHẦN II. CÂU TRẮC NGHIỆM ĐÚNG SAI",
type: "true-false",
question: "Cho phương trình $\\sqrt{3} \\tan x - 1 = 0$.",
s: [
{"text": "Điều kiện xác định của phương trình là $x \\neq \\frac{\\pi}{2} + k\\pi$. (a Đ 2)", "a": true},
{"text": "Phương trình tương đương $\\tan x = \\frac{1}{\\sqrt{3}}$. (b Đ 2)", "a": true},
{"text": "Một nghiệm của phương trình là $x = \\frac{\\pi}{6}$. (c Đ 2)", "a": true},
{"text": "Phương trình có nghiệm $x = \\frac{\\pi}{3} + k\\pi$. (d)", "a": false}
]
},
{
id: 1100036,
classTag: "1101.2",
part: "PHẦN II. CÂU TRẮC NGHIỆM ĐÚNG SAI",
type: "true-false",
question: "Cho hàm số $y = 2\\cos 2x + 1$.",
s: [
{"text": "Chu kì của hàm số là $2\\pi$. (a)", "a": false},
{"text": "Giá trị lớn nhất của hàm số là $3$. (b Đ 2)", "a": true},
{"text": "Giá trị nhỏ nhất của hàm số là $-1$. (c Đ 2)", "a": true},
{"text": "Hàm số nghịch biến trên khoảng $(0; \\frac{\\pi}{2})$. (d Đ 2)", "a": true}
]
},
{
id: 1100037,
classTag: "1101.2",
part: "PHẦN II. CÂU TRẮC NGHIỆM ĐÚNG SAI",
type: "true-false",
question: "Xét phương trình $\\sin 2x = \\sin x$.",
s: [
{"text": "Phương trình có nghiệm $x = k2\\pi$. (a Đ 2)", "a": true},
{"text": "Phương trình có nghiệm $x = \\frac{\\pi}{3} + \\frac{k2\\pi}{3}$. (b Đ 2)", "a": true},
{"text": "Phương trình có 3 điểm biểu diễn trên đường tròn lượng giác. (c)", "a": false},
{"text": "Nghiệm dương nhỏ nhất là $x = \\frac{\\pi}{3}$. (d Đ 2)", "a": true}
]
},
{
id: 1100038,
classTag: "1101.3",
part: "PHẦN II. CÂU TRẮC NGHIỆM ĐÚNG SAI",
type: "true-false",
question: "Cho phương trình $\\cos^2 x - 3\\cos x + 2 = 0$.",
s: [
{"text": "Đặt $t = \\cos x$, điều kiện $|t| \\le 1$. (a Đ 3)", "a": true},
{"text": "Phương trình trở thành $t^2 - 3t + 2 = 0$. (b Đ 3)", "a": true},
{"text": "Phương trình có nghiệm $\\cos x = 2$ (loại) và $\\cos x = 1$. (c Đ 3)", "a": true},
{"text": "Các nghiệm của phương trình là $x = k\\pi$. (d)", "a": false}
]
},
{
id: 1100039,
classTag: "1101.3",
part: "PHẦN II. CÂU TRẮC NGHIỆM ĐÚNG SAI",
type: "true-false",
question: "Cho hàm số $y = \\tan x + \\cot x$.",
s: [
{"text": "Tập xác định $D = \\mathbb{R} \\setminus \\{\\frac{k\\pi}{2}, k \\in \\mathbb{Z}\\}$. (a Đ 3)", "a": true},
{"text": "Hàm số là hàm số lẻ. (b Đ 3)", "a": true},
{"text": "Giá trị nhỏ nhất của hàm số trên $(0; \\frac{\\pi}{2})$ là $2$. (c Đ 3)", "a": true},
{"text": "Đồ thị hàm số không cắt trục hoành. (d Đ 3)", "a": true}
]
},
{
id: 1100040,
classTag: "1101.3",
part: "PHẦN II. CÂU TRẮC NGHIỆM ĐÚNG SAI",
type: "true-false",
question: "Cho phương trình $\\sin x + \\cos x = 1$.",
s: [
{"text": "Phương trình tương đương $\\sqrt{2}\\sin(x + \\frac{\\pi}{4}) = 1$. (a Đ 3)", "a": true},
{"text": "Nghiệm của phương trình là $x = k2\\pi$. (b Đ 3)", "a": true},
{"text": "Nghiệm của phương trình là $x = \\frac{\\pi}{2} + k2\\pi$. (c Đ 3)", "a": true},
{"text": "Phương trình có vô số nghiệm trên khoảng $(0; \\pi)$. (d)", "a": false}
]
},
{
id: 1100041,
classTag: "1101.3",
part: "PHẦN II. CÂU TRẮC NGHIỆM ĐÚNG SAI",
type: "true-false",
question: "Cho biểu thức $P = \\frac{\\sin 2a + \\sin a}{1 + \\cos 2a + \\cos a}$.",
s: [
{"text": "$\\sin 2a = 2\\sin a \\cos a$. (a Đ 3)", "a": true},
{"text": "$1 + \\cos 2a = 2\\cos^2 a$. (b Đ 3)", "a": true},
{"text": "Rút gọn biểu thức ta được $P = \\tan a$. (c Đ 3)", "a": true},
{"text": "Với $a = \\frac{\\pi}{4}$ thì $P = 1$. (d Đ 3)", "a": true}
]
},
{
id: 1100042,
classTag: "1101.3",
part: "PHẦN II. CÂU TRẮC NGHIỆM ĐÚNG SAI",
type: "true-false",
question: "Số nghiệm của phương trình $\\sin 3x - \\sin x = 0$ trên đoạn $$.",
s: [
{"text": "Phương trình tương đương $2\\cos 2x \\sin x = 0$. (a Đ 3)", "a": true},
{"text": "Phương trình có nghiệm $x = 0; \\pi$. (b Đ 3)", "a": true},
{"text": "Phương trình có nghiệm $x = \\frac{\\pi}{4}; \\frac{3\\pi}{4}$. (c Đ 3)", "a": true},
{"text": "Tổng cộng phương trình có 5 nghiệm trên đoạn đã cho. (d)", "a": false}
]
},
{
id: 1100043,
classTag: "1101.4",
part: "PHẦN II. CÂU TRẮC NGHIỆM ĐÚNG SAI",
type: "true-false",
question: "Cho phương trình $m\\sin x + \\cos x = \\sqrt{5}$.",
s: [
{"text": "Phương trình có nghiệm khi $m^2 + 1 \\ge 5$. (a Đ 4)", "a": true},
{"text": "Giá trị $m = 2$ thỏa mãn phương trình có nghiệm. (b Đ 4)", "a": true},
{"text": "Với $m = 0$, phương trình vô nghiệm. (c Đ 4)", "a": true},
{"text": "Có duy nhất một giá trị nguyên của $m$ để phương trình có nghiệm. (d)", "a": false}
]
},
{
id: 1100044,
classTag: "1101.4",
part: "PHẦN II. CÂU TRẮC NGHIỆM ĐÚNG SAI",
type: "true-false",
question: "Cho phương trình $\\cos 2x - (2m+1)\\cos x + m + 1 = 0$.",
s: [
{"text": "Phương trình tương đương $2\\cos^2 x - (2m+1)\\cos x + m = 0$. (a Đ 4)", "a": true},
{"text": "Phương trình luôn có nghiệm $\\cos x = \\frac{1}{2}$ với mọi $m$. (b Đ 4)", "a": true},
{"text": "Phương trình có nghiệm $\\cos x = m$. (c Đ 4)", "a": true},
{"text": "Để phương trình có 3 nghiệm thuộc khoảng $(0; \\frac{3\\pi}{2})$ thì $m = 0$. (d Đ 4)", "a": true}
]
},
{
id: 1100045,
classTag: "1101.4",
part: "PHẦN II. CÂU TRẮC NGHIỆM ĐÚNG SAI",
type: "true-false",
question: "Tìm giá trị lớn nhất $M$ và nhỏ nhất $m$ của $y = \\sin^4 x + \\cos^4 x$.  ",
s: [
{"text": "$y = 1 - \\frac{1}{2}\\sin^2 2x$. (a Đ 4)", "a": true},
{"text": "Giá trị lớn nhất $M = 1$. (b Đ 4)", "a": true},
{"text": "Giá trị nhỏ nhất $m = 0$. (c)", "a": false},
{"text": "Giá trị nhỏ nhất $m = 0.5$. (d Đ 4)", "a": true}
]
},
{
id: 1100046,
classTag: "1101.2",
part: "PHẦN III. CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN",
type: "short-answer",
question: "Tính giá trị của $\\sin \\frac{13\\pi}{6}$.",
a: "0.5"
},
{
id: 1100047,
classTag: "1101.2",
part: "PHẦN III. CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN",
type: "short-answer",
question: "Cho $\\cos \\alpha = 0.6$. Tính giá trị của $\\cos 2\\alpha$.",
a: "-0.28"
},
{
id: 1100048,
classTag: "1101.2",
part: "PHẦN III. CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN",
type: "short-answer",
question: "Tìm số nghiệm của phương trình $\\sin 2x = 1$ trên khoảng $(0; 3\\pi)$.",
a: "3"
},
{
id: 1100049,
classTag: "1101.2",
part: "PHẦN III. CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN",
type: "short-answer",
question: "Tính giá trị biểu thức $A = \\sin^2 10^\\circ + \\sin^2 80^\\circ$.",
a: "1"
},
{
id: 1100050,
classTag: "1101.2",
part: "PHẦN III. CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN",
type: "short-answer",
question: "Cho hàm số $y = 1.5\\sin(2x) + 2$. Tìm giá trị lớn nhất của hàm số.",
a: "3.5"
},
{
id: 1100051,
classTag: "1101.2",
part: "PHẦN III. CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN",
type: "short-answer",
question: "Nghiệm dương nhỏ nhất (tính theo độ) của phương trình $\\sin x = \\frac{\\sqrt{2}}{2}$ là bao nhiêu?",
a: "45"
},
{
id: 1100052,
classTag: "1101.2",
part: "PHẦN III. CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN",
type: "short-answer",
question: "Tìm chu kì $T$ của hàm số $y = \\tan 2x$ (viết kết quả theo hệ số của $\\pi$, ví dụ $0.5\\pi$ thì ghi 0.5).",
a: "0.5"
},
{
id: 1100053,
classTag: "1101.3",
part: "PHẦN III. CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN",
type: "short-answer",
question: "Tính tổng các nghiệm của phương trình $\\cos x = 0$ trên đoạn $$ (chia cho $\\pi$).",
a: "2"
},
{
id: 1100054,
classTag: "1101.3",
part: "PHẦN III. CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN",
type: "short-answer",
question: "Cho $\\tan \\alpha = 2$. Tính giá trị biểu thức $A = \\frac{\\sin \\alpha + \\cos \\alpha}{\\sin \\alpha - \\cos \\alpha}$.",
a: "3"
},
{
id: 1100055,
classTag: "1101.3",
part: "PHẦN III. CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN",
type: "short-answer",
question: "Tìm giá trị của $m$ để phương trình $\\cos x = m - 1$ có nghiệm $x = \\frac{\\pi}{3}$.",
a: "1.5"
},
{
id: 1100056,
classTag: "1101.3",
part: "PHẦN III. CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN",
type: "short-answer",
question: "Một bánh xe quay được 5 vòng trong 2 giây. Tính góc quay được (theo radian) trong 1 giây (chia cho $\\pi$).",
a: "5"
},
{
id: 1100057,
classTag: "1101.3",
part: "PHẦN III. CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN",
type: "short-answer",
question: "Tìm số điểm biểu diễn nghiệm của phương trình $\\sin 4x = 0$ trên đường tròn lượng giác.",
a: "8"
},
{
id: 1100058,
classTag: "1101.4",
part: "PHẦN III. CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN",
type: "short-answer",
question: "Tìm giá trị lớn nhất của hàm số $y = \\sin x + \\cos x$. (Làm tròn đến 2 chữ số thập phân).",
a: "1.41"
},
{
id: 1100059,
classTag: "1101.4",
part: "PHẦN III. CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN",
type: "short-answer",
question: "Tìm số giá trị nguyên của tham số $m$ để phương trình $\\sqrt{3}\\sin x - \\cos x = m$ có nghiệm.",
a: "5"
},
{
id: 1100060,
classTag: "1101.4",
part: "PHẦN III. CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN",
type: "short-answer",
question: "Cho phương trình $\\cos 2x - 3\\cos x + 2 = 0$. Tính tổng các nghiệm của phương trình trong khoảng $(0; 10\\pi)$ (chia cho $\\pi$).",
a: "20"
},
  // END111 Kết thúc ID 11
  {
id: 1200001,
classTag: "1204.1",
part: "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
type: "mcq",
question: "Tính tích phân $\\int\\limits_{0}^{1}{2xdx}$ (M1.15.4). Câu hỏi để test app nên không quan trọng đúng sai. Đ là đúng.",
o: [
"$1$ (Đ).",
"2.",
"3.",
"4."
],
a: "$1$ (Đ)."
},
{
id: 1200002,
classTag: "1204.1",
part: "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
type: "mcq",
question: "Tính tích phân $\\int\\limits_{0}^{1}{{{e}^{x}}dx}$ (M1.15.1).Câu hỏi để test app nên không quan trọng đúng sai.",
o: [
"$e$ (Đ).",
"$e-1$.",
"3.",
"4."
],
a: "$e$ (Đ)."
},
{
id: 1200003,
classTag: "1204.1",
part: "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
type: "mcq",
question: "Tính tích phân $\\int\\limits_{0}^{\\pi }{\\sin xdx}$ (M1.152). Câu hỏi để test app nên không quan trọng đúng sai. Đ là đúng.",
o: [
"$1$ (Đ).",
"2.",
"3",
"4"
],
a: "$1$ (Đ)."
},
{
id: 1200004,
classTag: "1204.1",
part: "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
type: "mcq",
question: "Tính tích phân $\\int\\limits_{0}^{2}{3{{x}^{2}}dx}$ (M1.15.3). Câu hỏi để test app nên không quan trọng đúng sai. Đ là đúng.",
o: [
"$1$.",
"2.",
"3",
"4(Đ)"
],
a: "4(Đ)"
},
{
id: 1200005,
classTag: "1204.1",
part: "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
type: "mcq",
question: "Tính tích phân $\\int\\limits_{0}^{1}{4{{x}^{3}}dx}$ (M1.15.5). Câu hỏi để test app nên không quan trọng đúng sai. Đ là đúng.",
o: [
"$1$ (Đ).",
"2.",
"3",
"4"
],
a: "$1$ (Đ)."
},
{
id: 1200006,
classTag: "1204.1",
part: "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
type: "mcq",
question: "Tính tích phân $\\int\\limits_{0}^{1}{5{{x}^{4}}dx}$ (M1.15.6). Câu hỏi để test app nên không quan trọng đúng sai. Đ là đúng.",
o: [
"$1$",
"2.",
"3(Đ).",
"4"
],
a: "3(Đ)."
},
{
id: 1200007,
classTag: "1204.1",
part: "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
type: "mcq",
question: "Tính tích phân  $\\int\\limits_{0}^{1}{6{{x}^{5}}dx}$  (M1.15.7). Câu hỏi để test app nên không quan trọng đúng sai. Đ là đúng.",
o: [
"$1$ (Đ).",
"2.",
"3",
"4"
],
a: "$1$ (Đ)."
},
{
id: 1200008,
classTag: "1204.1",
part: "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
type: "mcq",
question: "Tính tích phân $\\int\\limits_{0}^{1}{7{{x}^{6}}dx}$ (M1.15.8). Câu hỏi để test app nên không quan trọng đúng sai. Đ là đúng.",
o: [
"$1$ (Đ).",
"2.",
"3",
"4"
],
a: "$1$ (Đ)."
},
{
id: 1200009,
classTag: "1204.1",
part: "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
type: "mcq",
question: "Tính tích phân $\\int\\limits_{0}^{1}{5{{x}^{4}}dx}$ (M1.15.9). Câu hỏi để test app nên không quan trọng đúng sai. Đ là đúng.",
o: [
"$1$ (Đ).",
"2.",
"3",
"4"
],
a: "$1$ (Đ)."
},
{
id: 1200010,
classTag: "1204.1",
part: "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
type: "mcq",
question: "Tính tích phân $\\int\\limits_{0}^{1}{5{{x}^{4}}dx}$ (M1.15.10). Câu hỏi để test app nên không quan trọng đúng sai. Đ là đúng.",
o: [
"$1$ (Đ).",
"2.",
"3",
"4"
],
a: "$1$ (Đ)."
},
{
id: 1200011,
classTag: "1204.1",
part: "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
type: "mcq",
question: "Tính tích phân $\\int\\limits_{0}^{1}{5{{x}^{4}}dx}$ (M1.15.11). Câu hỏi để test app nên không quan trọng đúng sai. Đ là đúng.",
o: [
"$1$ (Đ).",
"2.",
"3",
"4"
],
a: "$1$ (Đ)."
},
{
id: 1200012,
classTag: "1204.1",
part: "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
type: "mcq",
question: "Tính tích phân $\\int\\limits_{0}^{1}{5{{x}^{4}}dx}$ (M1.15.12). Câu hỏi để test app nên không quan trọng đúng sai. Đ là đúng.",
o: [
"$1$ (Đ).",
"2.",
"3",
"4"
],
a: "$1$ (Đ)."
},
{
id: 1200013,
classTag: "1204.1",
part: "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
type: "mcq",
question: "Tính tích phân $\\int\\limits_{0}^{1}{5{{x}^{4}}dx}$ (M1.15.13). Câu hỏi để test app nên không quan trọng đúng sai. Đ là đúng.",
o: [
"$1$ (Đ).",
"2.",
"3",
"4"
],
a: "$1$ (Đ)."
},
{
id: 1200014,
classTag: "1204.1",
part: "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
type: "mcq",
question: "Tính tích phân $\\int\\limits_{0}^{1}{5{{x}^{4}}dx}$ (M1.15.14). Câu hỏi để test app nên không quan trọng đúng sai. Đ là đúng.",
o: [
"$1$ (Đ).",
"2.",
"3",
"4"
],
a: "$1$ (Đ)."
},
{
id: 1200015,
classTag: "1204.1",
part: "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
type: "mcq",
question: "Tính tích phân $\\int\\limits_{0}^{1}{5{{x}^{4}}dx}$ (M1.15.15). Câu hỏi để test app nên không quan trọng đúng sai. Đ là đúng.",
o: [
"$1$.",
"2.",
"3",
"4(Đ)."
],
a: "4(Đ)."
},
{
id: 1200016,
classTag: "1204.2",
part: "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
type: "mcq",
question: "Tính tích phân $\\int\\limits_{0}^{1}{5{{x}^{4}}dx}$ (M2.15.1). Câu hỏi để test app nên không quan trọng đúng sai. Đ là đúng.",
o: [
"$1$ (Đ).",
"2.",
"3",
"4"
],
a: "$1$ (Đ)."
},
{
id: 1200017,
classTag: "1204.2",
part: "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
type: "mcq",
question: "Tính tích phân $\\int\\limits_{0}^{1}{5{{x}^{4}}dx}$ (M2.15.2). Câu hỏi để test app nên không quan trọng đúng sai. Đ là đúng.",
o: [
"$1$ (Đ).",
"2.",
"3",
"4"
],
a: "$1$ (Đ)."
},
{
id: 1200018,
classTag: "1204.2",
part: "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
type: "mcq",
question: "Tính tích phân $\\int\\limits_{0}^{1}{5{{x}^{4}}dx}$ (M2.15.3). Câu hỏi để test app nên không quan trọng đúng sai. Đ là đúng.",
o: [
"$1$ (Đ).",
"2.",
"3",
"4"
],
a: "$1$ (Đ)."
},
{
id: 1200019,
classTag: "1204.2",
part: "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
type: "mcq",
question: "Tính tích phân $\\int\\limits_{0}^{1}{5{{x}^{4}}dx}$ (M2.15.4). Câu hỏi để test app nên không quan trọng đúng sai. Đ là đúng.",
o: [
"$1$ (Đ).",
"2.",
"3",
"4"
],
a: "$1$ (Đ)."
},
{
id: 1200020,
classTag: "1204.2",
part: "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
type: "mcq",
question: "Tính tích phân $\\int\\limits_{0}^{1}{5{{x}^{4}}dx}$ (M2.15.5). Câu hỏi để test app nên không quan trọng đúng sai. Đ là đúng.",
o: [
"$1$ (Đ).",
"2.",
"3",
"4"
],
a: "$1$ (Đ)."
},
{
id: 1200021,
classTag: "1204.2",
part: "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
type: "mcq",
question: "Tính tích phân $\\int\\limits_{0}^{1}{5{{x}^{4}}dx}$ (M2.15.6). Câu hỏi để test app nên không quan trọng đúng sai. Đ là đúng.",
o: [
"$1$ (Đ).",
"2.",
"3",
"4"
],
a: "$1$ (Đ)."
},
{
id: 1200022,
classTag: "1204.2",
part: "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
type: "mcq",
question: "Tính tích phân $\\int\\limits_{0}^{1}{5{{x}^{4}}dx}$ (M2.15.7). Câu hỏi để test app nên không quan trọng đúng sai. Đ là đúng.",
o: [
"$1$ (Đ).",
"2.",
"3",
"4"
],
a: "$1$ (Đ)."
},
{
id: 1200023,
classTag: "1204.2",
part: "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
type: "mcq",
question: "Tính tích phân $\\int\\limits_{0}^{1}{5{{x}^{4}}dx}$ (M2.15.8). Câu hỏi để test app nên không quan trọng đúng sai. Đ là đúng.",
o: [
"$1$ (Đ).",
"2.",
"3",
"4"
],
a: "$1$ (Đ)."
},
{
id: 1200024,
classTag: "1204.2",
part: "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
type: "mcq",
question: "Tính tích phân $\\int\\limits_{0}^{1}{5{{x}^{4}}dx}$ (M2.15.9). Câu hỏi để test app nên không quan trọng đúng sai. Đ là đúng.",
o: [
"$1$.",
"2.",
"3",
"4(Đ)."
],
a: "4(Đ)."
},
{
id: 1200025,
classTag: "1204.2",
part: "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
type: "mcq",
question: "Tính tích phân $\\int\\limits_{0}^{1}{5{{x}^{4}}dx}$ (M2.15.15). Câu hỏi để test app nên không quan trọng đúng sai. Đ là đúng.",
o: [
"$1$.",
"2.",
"3",
"4(Đ)."
],
a: "4(Đ)."
},
{
id: 1200026,
classTag: "1204.2",
part: "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
type: "mcq",
question: "Tính tích phân $\\int\\limits_{0}^{1}{5{{x}^{4}}dx}$ (M2.15.11). Câu hỏi để test app nên không quan trọng đúng sai. Đ là đúng.",
o: [
"$1$.",
"2.",
"3",
"4(Đ)."
],
a: "4(Đ)."
},
{
id: 1200027,
classTag: "1204.2",
part: "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
type: "mcq",
question: "Tính tích phân $\\int\\limits_{0}^{1}{5{{x}^{4}}dx}$ (M2.15.12). Câu hỏi để test app nên không quan trọng đúng sai. Đ là đúng.",
o: [
"$1$.",
"2.",
"3",
"4(Đ)."
],
a: "4(Đ)."
},
{
id: 1200028,
classTag: "1204.2",
part: "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
type: "mcq",
question: "Tính tích phân $\\int\\limits_{0}^{1}{5{{x}^{4}}dx}$ (M2.15.13). Câu hỏi để test app nên không quan trọng đúng sai. Đ là đúng.",
o: [
"$1$.",
"2.",
"3",
"4(Đ)."
],
a: "4(Đ)."
},
{
id: 1200029,
classTag: "1204.2",
part: "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
type: "mcq",
question: "Tính tích phân $\\int\\limits_{0}^{1}{5{{x}^{4}}dx}$ (M2.15.4). Câu hỏi để test app nên không quan trọng đúng sai. Đ là đúng.",
o: [
"$1$.",
"2.",
"3",
"4(Đ)."
],
a: "4(Đ)."
},
{
id: 1200030,
classTag: "1204.2",
part: "PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn",
type: "mcq",
question: "Tính tích phân $\\int\\limits_{0}^{1}{5{{x}^{4}}dx}$ (M2.15.5). Câu hỏi để test app nên không quan trọng đúng sai. Đ là đúng.",
o: [
"$1$.",
"2.",
"3",
"4(Đ)."
],
a: "4(Đ)."
},
{
id: 1200031,
classTag: "1204.2",
part: "PHẦN II. Câu trắc nghiệm đúng sai.",
type: "true-false",
question: "Tính tích phân $I=\\int\\limits_{0}^{1}{21xdx}$ (M2.5.1). Câu hỏi để test app nên không quan trọng đúng sai. (1T; 2F; 3F; 4T).",
s: [
{"text": "$1$", "a": true},
{"text": "2", "a": true},
{"text": "3", "a": false},
{"text": "4", "a": true}
]
},
{
id: 1200032,
classTag: "1204.2",
part: "PHẦN II. Câu trắc nghiệm đúng sai.",
type: "true-false",
question: "Tính tích phân $I=\\int\\limits_{0}^{1}{22xdx}$ (M2.5.2). Câu hỏi để test app nên không quan trọng đúng sai. (1T; 2T; 3F; 4T).",
s: [
{"text": "$1$", "a": true},
{"text": "2", "a": true},
{"text": "3", "a": false},
{"text": "4", "a": true}
]
},
{
id: 1200033,
classTag: "1204.2",
part: "PHẦN II. Câu trắc nghiệm đúng sai.",
type: "true-false",
question: "Tính tích phân $I=\\int\\limits_{0}^{1}{23xdx}$ (M2.5.3). Câu hỏi để test app nên không quan trọng đúng sai. (1T; 2T; 3T; 4T).",
s: [
{"text": "$1$", "a": true},
{"text": "2", "a": true},
{"text": "3", "a": true},
{"text": "4", "a": true}
]
},
{
id: 1200034,
classTag: "1204.2",
part: "PHẦN II. Câu trắc nghiệm đúng sai.",
type: "true-false",
question: "Tính tích phân $I=\\int\\limits_{0}^{1}{24xdx}$ (M2.5.4). Câu hỏi để test app nên không quan trọng đúng sai. (1T; 2T; 3T; 4F).",
s: [
{"text": "$1$", "a": true},
{"text": "2", "a": true},
{"text": "3", "a": true},
{"text": "4", "a": false}
]
},
{
id: 1200035,
classTag: "1204.2",
part: "PHẦN II. Câu trắc nghiệm đúng sai.",
type: "true-false",
question: "Tính tích phân $I=\\int\\limits_{0}^{1}{25xdx}$ (M2.5.5). Câu hỏi để test app nên không quan trọng đúng sai. (1F; 2T; 3T; 4T).",
s: [
{"text": "$1$", "a": true},
{"text": "2", "a": true},
{"text": "3", "a": true},
{"text": "4", "a": true}
]
},
{
id: 1200036,
classTag: "1204.3",
part: "PHẦN II. Câu trắc nghiệm đúng sai.",
type: "true-false",
question: "Tính tích phân $I=\\int\\limits_{0}^{1}{31xdx}$ (M3.5.1). Câu hỏi để test app nên không quan trọng đúng sai. (1T; 2T; 3T; 4F).",
s: [
{"text": "$1$", "a": true},
{"text": "2", "a": true},
{"text": "3", "a": true},
{"text": "4", "a": false}
]
},
{
id: 1200037,
classTag: "1204.3",
part: "PHẦN II. Câu trắc nghiệm đúng sai.",
type: "true-false",
question: "Tính tích phân $I=\\int\\limits_{0}^{1}{32xdx}$ (M3.5.2). Câu hỏi để test app nên không quan trọng đúng sai. (1T; 2F; 3T; 4F).",
s: [
{"text": "$1$", "a": true},
{"text": "2", "a": true},
{"text": "3", "a": true},
{"text": "4", "a": false}
]
},
{
id: 1200038,
classTag: "1204.3",
part: "PHẦN II. Câu trắc nghiệm đúng sai.",
type: "true-false",
question: "Tính tích phân $I=\\int\\limits_{0}^{1}{33xdx}$ (M3.5.3). Câu hỏi để test app nên không quan trọng đúng sai. (1T; 2T; 3T; 4F).",
s: [
{"text": "$1$", "a": true},
{"text": "2", "a": true},
{"text": "3", "a": true},
{"text": "4", "a": false}
]
},
{
id: 1200039,
classTag: "1204.3",
part: "PHẦN II. Câu trắc nghiệm đúng sai.",
type: "true-false",
question: "Tính tích phân $I=\\int\\limits_{0}^{1}{41xdx}$ (M3.5.4). Câu hỏi để test app nên không quan trọng đúng sai. (1T; 2F; 3T; 4F).",
s: [
{"text": "$1$", "a": true},
{"text": "2", "a": true},
{"text": "3", "a": true},
{"text": "4", "a": false}
]
},
{
id: 1200040,
classTag: "1204.3",
part: "PHẦN II. Câu trắc nghiệm đúng sai.",
type: "true-false",
question: "Tính tích phân $I=\\int\\limits_{0}^{1}{42xdx}$ (M3.5.5). Câu hỏi để test app nên không quan trọng đúng sai. (1T; 2F; 3T; 4F).",
s: [
{"text": "$1$", "a": true},
{"text": "2", "a": true},
{"text": "3", "a": true},
{"text": "4", "a": false}
]
},
{
id: 1200041,
classTag: "1204.4",
part: "PHẦN II. Câu trắc nghiệm đúng sai.",
type: "true-false",
question: "Tính tích phân $I=\\int\\limits_{0}^{1}{42xdx}$ (M4.2.1). Câu hỏi để test app nên không quan trọng đúng sai. (1T; 2F; 3T; 4F).",
s: [
{"text": "$1$", "a": true},
{"text": "2", "a": true},
{"text": "3", "a": true},
{"text": "4", "a": false}
]
},
{
id: 1200042,
classTag: "1204.4",
part: "PHẦN II. Câu trắc nghiệm đúng sai.",
type: "true-false",
question: "Tính tích phân $I=\\int\\limits_{0}^{1}{42xdx}$ (M4.2.2). Câu hỏi để test app nên không quan trọng đúng sai. (1T; 2F; 3T; 4F).",
s: [
{"text": "$1$", "a": true},
{"text": "2", "a": true},
{"text": "3", "a": true},
{"text": "4", "a": false}
]
},
{
id: 1200043,
classTag: "1204.1",
part: "PHẦN III. Câu trắc nghiệm trả lời ngắn.",
type: "short-answer",
question: "Tính tích phân $I=\\int\\limits_{0}^{1}{xdx}$(M1.5.1; 3)",
a: "3"
},
{
id: 1200044,
classTag: "1204.1",
part: "PHẦN III. Câu trắc nghiệm trả lời ngắn.",
type: "short-answer",
question: "Tính tích phân $I=\\int\\limits_{0}^{1}{\\sin 3xdx}$(M1.5.2; 3.34)",
a: "3.34"
},
{
id: 1200045,
classTag: "1204.1",
part: "PHẦN III. Câu trắc nghiệm trả lời ngắn.",
type: "short-answer",
question: "Tính tích phân $I=\\int\\limits_{0}^{1}{4dx}$(M1.5.3; 27.9)",
a: "27.9"
},
{
id: 1200046,
classTag: "1204.1",
part: "PHẦN III. Câu trắc nghiệm trả lời ngắn.",
type: "short-answer",
question: "Tính tích phân $I=\\int\\limits_{0}^{1}{9xdx}$(M1.5.4; 0.23)",
a: "0.23"
},
{
id: 1200047,
classTag: "1204.1",
part: "PHẦN III. Câu trắc nghiệm trả lời ngắn.",
type: "short-answer",
question: "Tính tích phân $I=\\int\\limits_{0}^{1}{xdx}-\\int\\limits_{0}^{2}{34xdx}$(M1.5.5; 7.89)",
a: "7.89"
},
{
id: 1200048,
classTag: "1204.2",
part: "PHẦN III. Câu trắc nghiệm trả lời ngắn.",
type: "short-answer",
question: "Tính tích phân $I=\\int\\limits_{0}^{1}{xdx}$(M2.5.1; 3)",
a: "3"
},
{
id: 1200049,
classTag: "1204.2",
part: "PHẦN III. Câu trắc nghiệm trả lời ngắn.",
type: "short-answer",
question: "Tính tích phân $I=\\int\\limits_{0}^{1}{\\sin 3xdx}$(M2.5.2; 3.34)",
a: "3.34"
},
{
id: 1200050,
classTag: "1204.2",
part: "PHẦN III. Câu trắc nghiệm trả lời ngắn.",
type: "short-answer",
question: "Tính tích phân $I=\\int\\limits_{0}^{1}{4dx}$(M2.5.3; 27.9)",
a: "27.9"
},
{
id: 1200051,
classTag: "1204.2",
part: "PHẦN III. Câu trắc nghiệm trả lời ngắn.",
type: "short-answer",
question: "Tính tích phân $I=\\int\\limits_{0}^{1}{9xdx}$(M2.5.4; 0.23)",
a: "0.23"
},
{
id: 1200052,
classTag: "1204.2",
part: "PHẦN III. Câu trắc nghiệm trả lời ngắn.",
type: "short-answer",
question: "Tính tích phân $I=\\int\\limits_{0}^{1}{xdx}-\\int\\limits_{0}^{2}{34xdx}$(M2.5.5; 7.89)",
a: "7.89"
},
{
id: 1200053,
classTag: "1204.3",
part: "PHẦN III. Câu trắc nghiệm trả lời ngắn.",
type: "short-answer",
question: "Tính tích phân $I=\\int\\limits_{0}^{1}{4dx}$(M3.3.1; 27.9)",
a: "27.9"
},
{
id: 1200054,
classTag: "1204.3",
part: "PHẦN III. Câu trắc nghiệm trả lời ngắn.",
type: "short-answer",
question: "Tính tích phân $I=\\int\\limits_{0}^{1}{9xdx}$(M3.3.2; 0.23)",
a: "0.23"
},
{
id: 1200055,
classTag: "1204.3",
part: "PHẦN III. Câu trắc nghiệm trả lời ngắn.",
type: "short-answer",
question: "Tính tích phân $I=\\int\\limits_{0}^{1}{xdx}-\\int\\limits_{0}^{2}{34xdx}$(M3.3.3; 7.89)",
a: "7.89"
},
{
id: 1200056,
classTag: "1204.4",
part: "PHẦN III. Câu trắc nghiệm trả lời ngắn.",
type: "short-answer",
question: "Tính tích phân $I=\\int\\limits_{0}^{1}{4dx}$(M4.3.1; 27.9)",
a: "27.9"
},
{
id: 1200057,
classTag: "1204.4",
part: "PHẦN III. Câu trắc nghiệm trả lời ngắn.",
type: "short-answer",
question: "Tính tích phân $I=\\int\\limits_{0}^{1}{9xdx}$(M4.3.2; 0.23)",
a: "0.23"
},
{
id: 1200058,
classTag: "1204.4",
part: "PHẦN III. Câu trắc nghiệm trả lời ngắn.",
type: "short-answer",
question: "Tính tích phân $I=\\int\\limits_{0}^{1}{xdx}-\\int\\limits_{0}^{2}{34xdx}$(M4.3.3; 7.89)",
a: "7.89"
}
];

const shuffleArray = <T>(array: T[]): T[] => {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

export const pickQuestionsSmart = (
  topicIds: number[], 
  counts: { mc: number[], tf: number[], sa: number[] },
  levels: { mc3: number[], mc4: number[], tf3: number[], tf4: number[], sa3: number[], sa4: number[] }
) => {
  let selectedPart1: Question[] = [];
  let selectedPart2: Question[] = [];
  let selectedPart3: Question[] = [];
  
  topicIds.forEach((tid, idx) => {
    // Lọc câu hỏi theo chuyên đề
    const pool = questionsBank.filter(q => q.classTag.toString().startsWith(tid.toString() + "."));
    
    const getSub = (type: string, l3: number, l4: number, total: number) => {
      const typePool = pool.filter(q => q.type === type);
      const p4 = typePool.filter(q => q.classTag.toString().endsWith(".4"));
      const p3 = typePool.filter(q => q.classTag.toString().endsWith(".3"));
      const pOther = typePool.filter(q => !q.classTag.toString().endsWith(".3") && !q.classTag.toString().endsWith(".4"));

      let res4 = shuffleArray(p4).slice(0, l4);
      let deficit4 = l4 - res4.length; 
      let res3 = shuffleArray(p3).slice(0, l3 + deficit4);
      
      let res = [...res4, ...res3];
      const remainingNeeded = total - res.length;
      if (remainingNeeded > 0) {
        res = [...res, ...shuffleArray(pOther).slice(0, remainingNeeded)];
      }
      return res;
    };

    selectedPart1 = [...selectedPart1, ...getSub('mcq', levels.mc3[idx] || 0, levels.mc4[idx] || 0, counts.mc[idx] || 0)];
    selectedPart2 = [...selectedPart2, ...getSub('true-false', levels.tf3[idx] || 0, levels.tf4[idx] || 0, counts.tf[idx] || 0)];
    selectedPart3 = [...selectedPart3, ...getSub('short-answer', levels.sa3[idx] || 0, levels.sa4[idx] || 0, counts.sa[idx] || 0)];
  });

  // Xử lý hậu kỳ: Trộn đáp án MCQ và trộn các ý của câu hỏi Đúng/Sai
  return [...selectedPart1, ...selectedPart2, ...selectedPart3].map(q => {
    const newQ = { ...q };
    if (newQ.o) {
      newQ.shuffledOptions = shuffleArray(newQ.o);
    }
    if (newQ.s && newQ.type === 'true-false') {
      newQ.s = shuffleArray(newQ.s);
    }
    return newQ;
  });
};
