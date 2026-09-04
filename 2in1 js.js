let xxx = 5; //לכמה עומק בודקים
let jhg;
/*מערך דן ממדי על כל כפתור*/
const arrsmall = new Array(9); /*מערך חד ממדי בגודל 9*/
for (let i = 0; i < arrsmall.length; i++) { /*לולאה כמספר האיברים במערך החד ממדי 9*/
    arrsmall[i] = new Array(9) /*מציב בכל איבר במערך החד ממדי מערך חד ממדי בגודל 9*/
    for (let s = 0; s < arrsmall[i].length; s++) /*לולאה כמספר האיברים במערך החד ממדי שבתוך החד ממדי 9*/
        arrsmall[i][s] = 0; /*מציב שם 0*/
}
const arrbig = new Array(3); /*מערך חד ממדי בגודל 3*/
for (let i = 0; i < arrbig.length; i++) { /*לולאה כמספר האיברים במערך החד ממדי 3*/
    arrbig[i] = new Array(3) /*מציב בכל איבר במערך החד ממדי מערך חד ממדי בגודל 3*/
    for (let s = 0; s < arrbig[i].length; s++) /*לולאה כמספר האיברים במערך החד ממדי שבתוך החד ממדי 3*/
        arrbig[i][s] = 0; /*מציב שם 0*/
}
let tor = 1; /*משתנה שמגלה תור מי*/
let tds = 100; /*משתנה שמגלה לאיזה כפתורים לאפשר לפעול 100 מאפשר לכולם*/
let win = 0; /*משתנה שאומר אם יש ניצחון או לא*/

let igf = 0;
let picx;
let pico;

//איזה כפתורים כל כפתור מדגיש
const buttonMapping = {
    0: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    1: [9, 10, 11, 12, 13, 14, 15, 16, 17],
    2: [18, 19, 20, 21, 22, 23, 24, 25, 26],
    3: [27, 28, 29, 30, 31, 32, 33, 34, 35],
    4: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    5: [45, 46, 47, 48, 49, 50, 51, 52, 53],
    6: [54, 55, 56, 57, 58, 59, 60, 61, 62],
    7: [63, 64, 65, 66, 67, 68, 69, 70, 71],
    8: [72, 73, 74, 75, 76, 77, 78, 79, 80],
};
let highlightedButtons = []; // מערך לשמירת הכפתורים המודגשים

function f() {
    let ew = 0; /*לאיזה פונקציה הכפתור יוביל אם ילחצו עליו*/
    let idtd = 0.1; /*מגדיר id לאיברים בטבלה*/
    let s = "" /*מגדיר משתנה*/
    let idnum = 0; /*מגדיר משתנה*/
    s += "<table border='1'>" /*מגדיר טבלה*/
    for (let i = 0; i < 3; i++) { /*לולאה שחוזרת על עצמה 3 פעמים*/
        s += "<tr>"; /*פותח עמודה בטבלה*/
        for (let w = 0; w < 3; w++) { /*לולאה שחוזרת על עצמה 3 פעמים*/
            s += "<td id='" + idtd.toString() + "'style = 'width: 210px; height: 210px'>"; /*פותח איבר בעמודה עם idtd*/
            for (let r = 0; r < 3; r++) { /*לולאה שחוזרת על עצמה 3 פעמים*/
                for (let c = 0; c < 3; c++) { /*לולאה שחוזרת על עצמה 3 פעמים*/
                    s += "<button id='" + idnum.toString() + "'style='z-index: 0;' class='qwerty' onclick = 'cr" + ew + "(this);' > ";
                    /*שם כפתור בגודל ובצבע שרשומים ומה קורה אם לוחצים (יש הבדלים בן הכפתורים*/
                    s += "<br/>"; /*(רושם בתוך הכפתור לרדת שורה (לא רואים כלום*/
                    s += "<img/>";
                    s = s + "</button>";
                    idnum++;
                    document.getElementById("play").innerHTML = s; /*מציב את הטבלה עם הכפתורים במקום הכפתור*/
                }
                s = s + "<br />" /*יורד שורה*/
            }
            s += "</td>"
            idtd += 1;
            ew++;
        }
        s += "</tr>"
    }
    document.getElementById("play").innerHTML = s; /*מציב את הטבלה עם הכפתורים במקום הכפתור*/
    //document.getElementById("tor").innerHTML = `The turn of:<br /><img class='skin' src='${picx}' />`;
    // הוסף את השורות האלו ממש בסוף הפונקציה f(), אחרי הלולאות ואחרי השמת ה-innerHTML

    // מעלים את אזור בחירת מצב המשחק
    document.getElementById("mode-selector").innerHTML = "";

    // מפעיל את מחוון התורים רק אם זה מצב 1 נגד 1
    if (!vsComputer) {
        document.getElementById("tor").innerHTML = `The turn of:<br /><img class='skin' src='${picx}' style='width: 120px; height: 120px;' />`;
    }
}

let t_id;
let vsComputer = true; // משתנה שקובע אם משחקים נגד המחשב או נגד שחקן אחר
//true זה מול המחשב

// פונקציה לעדכון מצב המשחק (נקראת מה-HTML)
function setGameMode(isComputer) {
    vsComputer = isComputer;
    let btnCpu = document.getElementById("btn-vs-cpu");
    let btn1v1 = document.getElementById("btn-1v1");

    // החלפת צבעים כדי להראות מה נבחר
    if (isComputer) {
        btnCpu.style.backgroundColor = "#a0ffa0"; // מסמן את כפתור המחשב
        btn1v1.style.backgroundColor = "#fff"; // מאפס את השני
    } else {
        btnCpu.style.backgroundColor = "#fff"; // מאפס
        btn1v1.style.backgroundColor = "#a0ffa0"; // מסמן את כפתור 1 נגד 1
    }
}

function jow(t) {
    if (win == 0) { // מקבל כפתור שנלחץ רק אם המשחק עדיין לא נגמר

        // חישוב המיקום המדויק של המשבצת במערך הדו-ממדי הגדול (0 עד 8)
        let col = Math.floor((t.id % 27) / 9) * 3 + t.id % 3; // מחשב מספר עמודה במערך
        let row = Math.floor(t.id / 27) * 3 + Math.floor((t.id % 9) / 3); // מחשב מספר שורה במערך
        let c = t.id % 3; // מחשב עמודה מקומית (0, 1, 2) בתוך הלוח הקטן
        let r = Math.floor(t.id % 9 / 3); // מחשב שורה מקומית (0, 1, 2) בתוך הלוח הקטן

        if (arrsmall[row][col] == 0) { // בודק שהמשבצת הזו ריקה (ערך 0)
            jhg = 0; // מאפס את דגל הלחיצה בשביל פונקציית light

            if (vsComputer) {
                // --- מצב: משחק מול המחשב ---
                tor++; // מקדם את מניות התורים
                t.style.backgroundImage = `url('${picx}')`; // מציב את תמונת השחקן (איקס) בכפתור
                t.style.backgroundSize = "cover"; // מותח את התמונה על כל הכפתור
                arrsmall[row][col] = 1; // רושם 1 במערך (תפוס ע"י שחקן 1)

                tds = r * 10 + c; // מחשב לאיזה לוח קטן התור הזה שולח את היריב
                winTeko(arrsmall, row, col, t.id); // בודק אם המהלך הזה הביא לניצחון/תיקו בלוח הקטן או הגדול

                if (win == 0) { // אם המשחק לא הסתיים במהלך של השחקן
                    let best_move;
                    setTimeout(() => { // ממתין 800 מילישניות כדי לתת תחושה שהמחשב "חורש/חושב"
                        best_move = get_best_move(); // מפעיל אלגוריתם Minimax שמחזיר את המהלך הטוב ביותר

                        let rr = Math.floor(best_move / 10); // מפתח שורה של תור המחשב
                        let cc = best_move % 10; // מפתח עמודה של תור המחשב
                        arrsmall[rr][cc] = 2; // רושם 2 במערך (תפוס ע"י המחשב)

                        // מחשב בחזרה את ה-ID של הכפתור ב-HTML מתוך השורה והעמודה
                        t_id = Math.floor(rr / 3) * 27 + Math.floor(cc / 3) * 9 + (rr % 3) * 3 + (cc % 3);

                        let rrr = Math.floor(t_id % 9 / 3); // שורה מקומית של מהלך המחשב
                        let ccc = t_id % 3; // עמודה מקומית של מהלך המחשב
                        tds = rrr * 10 + ccc; // מחשב לאיזה לוח המחשב שולח בחזרה את השחקן

                        document.getElementById(t_id).style.backgroundImage = `url('${pico}')`; // מציב תמונת מחשב (עיגול)
                        document.getElementById(t_id).style.backgroundSize = "cover"; // מותח את התמונה
                        winTeko(arrsmall, rr, cc, t_id); // בודק אם המחשב ניצח/עשה תיקו

                        // בדיקת 3 במקום eedf: בודק אם התא הראשון בלוח שהמחשב שלח אליו מכיל 3 (כלומר הלוח סגור)
                        if (arrsmall[rrr * 3][ccc * 3] == 3) {
                            tds = 100; // פותח את המשחק לכל הלוחות
                        }

                        light(); // מדגיש את הלוח/הלוחות המותרים
                    }, 800);
                }
            } else {
                // --- מצב: משחק שחקן מול שחקן (1v1) ---
                t_id = t.id; // שומר את מזהה הכפתור הנלחץ

                if (tor % 2 != 0) { // אם מספר התור אי-זוגי -> תור שחקן 1 (איקס)
                    t.style.backgroundImage = `url('${picx}')`; // שים תמונה של איקס
                    arrsmall[row][col] = 1; // סמן במערך 1
                    // מעדכן את התצוגה בצד שבתור הבא ישחק שחקן 2 (עיגול)
                    document.getElementById("tor").innerHTML = `The turn of:<br /><img class='skin' src='${pico}' style='width: 120px; height: 120px;' />`;
                } else { // אם מספר התור זוגי -> תור שחקן 2 (עיגול)
                    t.style.backgroundImage = `url('${pico}')`; // שים תמונה של עיגול
                    arrsmall[row][col] = 2; // סמן במערך 2
                    // מעדכן את התצוגה בצד שבתור הבא ישחק שחקן 1 (איקס)
                    document.getElementById("tor").innerHTML = `The turn of:<br /><img class='skin' src='${picx}' style='width: 120px; height: 120px;' />`;
                }

                t.style.backgroundSize = "cover"; // מותח את התמונה המותקנת
                tds = r * 10 + c; // מחשב את קוד הלוח שאליו נשלח השחקן הבא

                winTeko(arrsmall, row, col, t.id); // בודק ניצחון או תיקו בלוח הקטן/הגדול

                // בדיקת 3 במקום eedf: בודק אם התא הראשון בלוח שאליו נשלח השחקן מכיל 3 (הלוח תפוס/גמור)
                if (arrsmall[r * 3][c * 3] == 3) {
                    tds = 100; // אם כן, מאפשר לשחק בכל הלוחות בסיבוב הבא
                }

                light(); // מדגיש את הלוח/הלוחות המותרים
                tor++; // מקדם את מונה התורים ב-1
            }
        }
    }
}

function light() {
    if (win == 0) { // מפעיל את ההדגשות רק אם המשחק עדיין פעיל (אין ניצחון סופי)

        if (tds == 100) { // אם tds שווה 100, המשמעות היא שמותר לשחק בכל הלוחות
            for (let qq = 0; qq < 9; qq++) { // עובר על 9 הלוחות
                for (let q = 0; q < 9; q++) { // עובר על 9 הכפתורים בכל לוח
                    if (document.getElementById(buttonMapping[qq][q]) != null) {
                        document.getElementById(buttonMapping[qq][q]).style.boxshadow = "0 0 15px #ff4500"; // צובע בצל מואר
                        document.getElementById(buttonMapping[qq][q]).style.filter = "brightness(3)"; // מעלה את הבהירות
                    }
                }
            }
        }

        if (jhg == 0 && tds != 100) { // בודק אם התבצעה לחיצה תקינה ויש לוח ספציפי לשחק בו
            // מחזיר את כל הכפתורים בלוח למראה הרגיל הכהה שלהם
            for (let qq = 0; qq < 9; qq++) {
                for (let q = 0; q < 9; q++) {
                    if (document.getElementById(buttonMapping[qq][q]) != null) {
                        document.getElementById(buttonMapping[qq][q]).style.boxshadow = "none"; // מבטל את הצל
                        document.getElementById(buttonMapping[qq][q]).style.filter = "brightness(1)"; // מחזיר בהירות רגילה
                        document.getElementById(buttonMapping[qq][q]).style.zindex = "0"; // מחזיר שכבה רגילה
                    }
                }
            }

            // מוצא את קבוצת הכפתורים של הלוח הספציפי שאליו נשלח השחקן ומדגיש רק אותם
            const relatedbuttons = buttonMapping[t_id % 9]; // משיג את המערך של 9 הכפתורים המיועדים
            for (let i = 0; i < relatedbuttons.length; i++) {
                let ttt = relatedbuttons[i]; // מזהה הכפתור הבודד
                let btn = document.getElementById(ttt); // תפסת הכפתור מה-DOM
                if (btn) {
                    btn.style.boxshadow = "0 0 15px #ff4500"; // מדגיש בצל מואר
                    btn.style.filter = "brightness(3)"; // מעלה בהירות
                }
            }
        }
        jhg = 1; // מעדכן את דגל הלחיצה כדי למנוע הרצה כפולה
    }
}
function winTeko(arrsmall, row, col, t) {
    let winsmalll = winsmall(arrsmall, row, col)
    if (winsmalll != 0) {
        /*אם יש ניצחון בבשורות או בעמודות או באחד האלכסונים אז*/
        let colss = Math.floor(col / 3) + Math.floor(row / 3) * 3; /*מגלה את האי די של המקום שנוצח*/
        let rrrr = Math.floor(t / 9 / 3); /*מגלה את המיקום שלו במשתנה הגדול*/
        let cccc = Math.floor(t / 9) % 3; /*מגלה את המיקום שלו במשתנה הגדול*/
        if (winsmalll == 1) { /*אם היה תור האיקס בזמן הניצחון*/
            document.getElementById(`${colss}.1`).innerHTML = `<img style='width: 100%; background-color: rgb(35,42,95);' src='${picx}' />`; /*שים שם איקס*/
            arrbig[rrrr][cccc] = 1; /*מציב במשתנה הדו ממדי הגדול*/
        }
        else { /*אם לא היה תור האיקס*/
            document.getElementById(`${colss}.1`).innerHTML = `<img style='width: 100%; background-color: rgb(35,42,95);' src='${pico}' />`; /*שים שם עיגול*/
            arrbig[rrrr][cccc] = 2; /*מציב במשתנה הדו ממדי הגדול*/
        }
        
        igf++;
        let c = t % 3; /*מגלה את מספר העמודה של הכפתור ביחס ל 9 הכפתורים*/
        let r = Math.floor(t % 9 / 3); /*מגלה את מספר השורה של הכפתור ביחס ל 9 הכפתורים*/
        for (let dotr = row - row % 3; dotr < row - row % 3 + 3; dotr++) { /*מגלה את ההתחלה של העמודה ביחס ל9 כפתורים*/
            for (let dotc = col - col % 3; dotc < col - col % 3 + 3; dotc++) { /*מגלה את ההתחלה של העמודה ביחס ל9 כפתורים*/
                arrsmall[dotr][dotc] = 3;
            }
        }
        let win_big = winbig(arrbig);
        if (win_big != 0) { /*אם יש ניצחון גדול*/
            win = 1; /*תעדכן את המחשב שיש ניצחון כדי שהכפתורים לא יעבדו*/
            document.getElementById("win").style.backgroundColor = "yellow"
            document.getElementById("www").innerHTML = "win"

            for (let gf = 0; gf < 10; gf++) {
                confetti();
                setTimeout(() => {
                    confetti();
                    //clearInterval(int);
                }, 2000);
            }
            if (win_big == 1)
                document.getElementById("win").style.backgroundImage = `url('${picx}')`
            else
                document.getElementById("win").style.backgroundImage = `url('${pico}')`

            // מחזיר את כל הכפתורים בלוח למראה הרגיל הכהה שלהם
            for (let qq = 0; qq < 9; qq++) {
                for (let q = 0; q < 9; q++) {
                    if (document.getElementById(buttonMapping[qq][q]) != null) {
                        document.getElementById(buttonMapping[qq][q]).style.boxshadow = "none"; // מבטל את הצל
                        document.getElementById(buttonMapping[qq][q]).style.filter = "brightness(1)"; // מחזיר בהירות רגילה
                        document.getElementById(buttonMapping[qq][q]).style.zindex = "0"; // מחזיר שכבה רגילה
                    }
                }
            }
            document.getElementById("tor").innerHTML = ``;


            // --- הוספת השורות הללו: המתנה של 3 שניות (3000ms) והצגת כפתור הריסטרט ---
            setTimeout(() => {
                showRestartButton();
            }, 3000);
        }

    }
    else {
        // בודק אם הלוח הקטן הסתיים בתיקו (אין מקומות פנויים ואין מנצח)
        if (tekosmall(row, col) == 1) {
            let colss = Math.floor(col / 3) + Math.floor(row / 3) * 3; // מחשב את המזהה (ID) של הלוח הקטן

            igf++; // מקדם את האינדקס במערכים

            // לולאה כפולה שעוברת על כל 9 המשבצות של הלוח הקטן שכרגע הסתיים בתיקו
            for (let dotr = row - row % 3; dotr < row - row % 3 + 3; dotr++) {
                for (let dotc = col - col % 3; dotc < col - col % 3 + 3; dotc++) {
                    arrsmall[dotr][dotc] = 3; // משנה את הערך במערך ל-3 כדי לסמן שהלוח הזה מבוטל/סגור
                }
            }
        }
    }
}
function winsmall(arr, r, c) {
    let winn = 0;
    let dotc = c - c % 3; /*מגלה את ההתחלה של העמודה ביחס ל9 כפתורים*/
    let dotr = r - r % 3; /*מגלה את ההתחלה של העמודה ביחס ל9 כפתורים*/
    if (arr[dotr][c] != 0 && arr[dotr][c] == arr[dotr + 1][c] && arr[dotr][c] == arr[dotr + 2][c])
        winn = arr[dotr][c]
    if (arr[r][dotc] != 0 && arr[r][dotc] == arr[r][dotc + 1] && arr[r][dotc] == arr[r][dotc + 2])
        winn = arr[r][dotc]
    if (arr[dotr][dotc] != 0 && arr[dotr][dotc] == arr[dotr + 1][dotc + 1] && arr[dotr][dotc] == arr[dotr + 2][dotc + 2])
        winn = arr[dotr][dotc]
    if (arr[dotr + 2][dotc] != 0 && arr[dotr + 2][dotc] == arr[dotr + 1][dotc + 1] && arr[dotr + 2][dotc] == arr[dotr][dotc + 2])
        winn = arr[dotr + 2][dotc];
    if (winn == 2)
        return -1;
    if (winn == 1)
        return 1;
    return 0;
}
function winbig(arrb) {
    let winn = 0;
    for (let r = 0; r < 3; r++) {
        if (arrb[r][0] != 0 && arrb[r][0] == arrb[r][1] && arrb[r][0] == arrb[r][2])
            winn = arrb[r][0];
    }
    for (let c = 0; c < 3; c++) {
        if (arrbig[0][c] != 0 && arrb[0][c] == arrb[1][c] && arrb[0][c] == arrb[2][c])
            winn = arrb[0][c];
    }
    if (arrbig[0][0] != 0 && arrb[0][0] == arrb[1][1] && arrb[0][0] == arrb[2][2])
        winn = arrb[0][0];
    if (arrbig[0][2] != 0 && arrb[0][2] == arrb[1][1] && arrb[0][2] == arrb[2][0])
        winn = arrb[0][2];
    if (winn == 2)
        return -1;
    if (winn == 1)
        return 1;
    return 0;
}
function tekosmall(r, c) {
    rdot = r - r % 3;
    cdot = c - c % 3;
    for (let i = 0; i < 3; i++) {
        for (let l = 0; l < 3; l++) {
            if (arrsmall[rdot + i][cdot + l] == 0)
                return 0;
        }
    }
    return 1;
}
{
    function cr0(t) { /*פונקציה של כשלוחצים על הכפתורים בהתאמה ומקבלת את הכפתור*/
        if (tds == 0 || tds == 100) /*אם התי די אס מוגדר לה או לכולם*/
            jow(t) /*אז לעבור לפונקציה גו' ולהעביר את הכפתור*/
        else error()
    }
    function cr1(t) {/*פונקציה של כשלוחצים על הכפתורים בהתאמה ומקבלת את הכפתור*/
        if (tds == 1 || tds == 100)  /*אם התי די אס מוגדר לה או לכולם*/
            jow(t) /*אז לעבור לפונקציה גו' ולהעביר את הכפתור*/
        else error()
    }
    function cr2(t) {/*פונקציה של כשלוחצים על הכפתורים בהתאמה ומקבלת את הכפתור*/
        if (tds == 2 || tds == 100)  /*אם התי די אס מוגדר לה או לכולם*/
            jow(t) /*אז לעבור לפונקציה גו' ולהעביר את הכפתור*/
        else error()
    }
    function cr3(t) {/*פונקציה של כשלוחצים על הכפתורים בהתאמה ומקבלת את הכפתור*/
        if (tds == 10 || tds == 100) /*אם התי די אס מוגדר לה או לכולם*/
            jow(t) /*אז לעבור לפונקציה גו' ולהעביר את הכפתור*/
        else error()
    }
    function cr4(t) {/*פונקציה של כשלוחצים על הכפתורים בהתאמה ומקבלת את הכפתור*/
        if (tds == 11 || tds == 100) /*אם התי די אס מוגדר לה או לכולם*/
            jow(t) /*אז לעבור לפונקציה גו' ולהעביר את הכפתור*/
        else error()
    }
    function cr5(t) {/*פונקציה של כשלוחצים על הכפתורים בהתאמה ומקבלת את הכפתור*/
        if (tds == 12 || tds == 100) /*אם התי די אס מוגדר לה או לכולם*/
            jow(t) /*אז לעבור לפונקציה גו' ולהעביר את הכפתור*/
        else error()
    }
    function cr6(t) {/*פונקציה של כשלוחצים על הכפתורים בהתאמה ומקבלת את הכפתור*/
        if (tds == 20 || tds == 100) /*אם התי די אס מוגדר לה או לכולם*/
            jow(t) /*אז לעבור לפונקציה גו' ולהעביר את הכפתור*/
        else error()
    }
    function cr7(t) {/*פונקציה של כשלוחצים על הכפתורים בהתאמה ומקבלת את הכפתור*/
        if (tds == 21 || tds == 100) /*אם התי די אס מוגדר לה או לכולם*/
            jow(t) /*אז לעבור לפונקציה גו' ולהעביר את הכפתור*/
        else error()
    }
    function cr8(t) {/*פונקציה של כשלוחצים על הכפתורים בהתאמה ומקבלת את הכפתור*/
        if (tds == 22 || tds == 100) /*אם התי די אס מוגדר לה או לכולם*/
            jow(t) /*אז לעבור לפונקציה גו' ולהעביר את הכפתור*/
        else
            error()

    }
}
function error() {
    document.getElementById("error").innerHTML = "ERROR"
    setTimeout(() => {
        document.getElementById("error").innerHTML = ""
    }, 2000);
}

function basc() {
    pico = "pic to xo fut.webp";
    picx = "pic to xo basc.webp";
    f();
}
function xo() {
    pico = "pic to xo o.webp";
    picx = "pic to xo x.webp";
    f();
}
let jh = 0;
function bodi() {
    jh = 1;
}
function tomjery() {
    pico = "pic to xo tom.png"
    picx = "pic to xo jery.png"
    f();
}
function namer() {
    if (jh == 1) {
        pico = "pic to xo roni.png";
        picx = "pic to xo arnold.png";
    } else {
        pico = "pic to xo siv.png";
        picx = "pic to xo namer.png";
    }
    f();
}
function get_best_move() {
    jl = 0 //מאפס את הבדיקה לעומק
    let tdt = tds; //שומר את ה TDS
    let best_score = Infinity; //דומר את הסכום הכי גרוע שיכול להיות כדי שכל דבר יהיה יותר טוב
    let best_index = -1; //למקרה שלא נמצא יותר טוב מחזיר -1
    let tdtf = tdt % 10; //מגלה לאיזה שורה בלוח הגדול שלחו אותו
    let tdta = Math.floor(tdt / 10); //מגלה לאיזה עמודה בלוח הגדול שלחו אותו
    let ii = tdta * 3; //מכפיל ב 3 כדי שיהיה ללוח הקטן
    let dd = tdtf * 3; //מכפיל ב 3 כדי שיהיה ללוח הקטן
    let iii = ii + 3; //מוסיף 3 כדי לחשב את קצה הלוח הקטן
    let ddd = dd + 3; //מוסיף 3 כדי לחשב את קצה הלוח הקטן
    if (arrbig[tdta][tdtf] != 0 || tdt == 100) { //אם המקום ששלחו אליו נוצח אז עושה שיעברו על כל הלוח
        ii = 0;
        dd = 0;
        iii = 9;
        ddd = 9;
    }


    for (let i = ii; i < iii; i++) { //לולאה של איפה אפשר לשים
        for (let d = dd; d < ddd; d++) { //לולאה של איפה אפשר לשים
            let smallRow = Math.floor(i / 3); //מגלה שורה בלוח הגדול
            let smallCol = Math.floor(d / 3); //מגלה עמודה בלוח הגדול
            if (arrsmall[i][d] == 0 && arrbig[smallRow][smallCol] == 0) { //אם לא ניצחו במקום הזה ולא שמו בוא עדיין אז:
                let tid = Math.floor(i / 3) * 27 + Math.floor(d / 3) * 9 + i % 3 * 3 + d % 3; //מגלה את ה ID של המקום
                let c = tid % 3;
                let r = Math.floor(tid % 9 / 3);
                tdt = r * 10 + c; //מגלה את ה TDT החדש
                const temp_board = arrsmall.map(row => [...row]); //מעתיק את הלוח הקטן
                const temp_board_big = arrbig.map(row => [...row]); //מעתיק את הלוח הגדול
                temp_board[i][d] = 2; //מציב במקום 2
                if_win_small_minmax(temp_board, temp_board_big, i, d); // שולח לפונקציה שבודקת עם יש ניצחון ואם כן משנה בהתאם
                const move_score = minmax(temp_board, 1, tdt, temp_board_big, jl + 1, -Infinity, Infinity);  // קורא לפונקציה מינמקס עם אלפא וביטא אינסוף ומינוס אינסוף ו ji+1
                if (move_score < best_score) { //אם פה זה יותר טוב
                    best_score = move_score; //שומר את הסכות היותתר טוב
                    best_index = i * 10 + d; //שומר את השורה והעמודה של המקום הכי טוב עד עכשיו
                }
            }
        }
    }

    return best_index; //מחזיר
}
let jl = 0;
function minmax(board, player, tds, boardbig, ji, alpha = -Infinity, beta = Infinity) {
    if (ji > xxx || winbig(boardbig) != 0) return evaluateBoard(board, boardbig); // אם בדקו מספיק עמוק מחזיר את הסכום

    let tdt = tds; //שומר את ה TDS
    let tdtf = tdt % 10; //מגלה לאיזה שורה בלוח הגדול שלחו אותו
    let tdta = Math.floor(tdt / 10); //מגלה לאיזה עמודה בלוח הגדול שלחו אותו
    let dd = tdtf * 3; //מכפיל ב 3 כדי שיהיה ללוח הקטן
    let ii = tdta * 3; //מכפיל ב 3 כדי שיהיה ללוח הקטן
    let iii = ii + 3; //מוסיף 3 כדי לחשב את קצה הלוח הקטן
    let ddd = dd + 3; //מוסיף 3 כדי לחשב את קצה הלוח הקטן
    if (boardbig[tdta][tdtf] != 0 || tdt == 100) { //אם המקום ששלחו אליו נוצח אז עושה שיעברו על כל הלוח
        ii = 0;
        dd = 0;
        iii = 9;
        ddd = 9;
    }
    if (player === 1) { // MAX - המחשב
        let best_score = -Infinity;
        for (let i = ii; i < iii; i++) { //לולאה של איפה אפשר לשים
            for (let d = dd; d < ddd; d++) { //לולאה של איפה אפשר לשים
                let smallRow = Math.floor(i / 3); //מגלה שורה בלוח הגדול
                let smallCol = Math.floor(d / 3); //מגלה עמודה בלוח הגדול
                if (board[i][d] == 0 && boardbig[smallRow][smallCol] == 0) { //אם לא ניצחו במקום הזה ולא שמו בוא עדיין אז:
                    let tid = smallRow * 27 + smallCol * 9 + (i % 3) * 3 + (d % 3); //מגלה את ה ID של המקום
                    let c = tid % 3;
                    let r = Math.floor(tid % 9 / 3);
                    let new_tdt = r * 10 + c; // מגלה מה ה TDT החדש
                    const temp_board = board.map(row => [...row]); //מעתיק את הלוח הקטן
                    const temp_board_big = boardbig.map(row => [...row]); //מעטיק את הלוח הגדול
                    temp_board[i][d] = 1; //מציב במקום 1
                    if_win_small_minmax(temp_board, temp_board_big, i, d);  // שולח לפונקציה שבודקת עם יש ניצחון ואם כן משנה בהתאם
                    let score = minmax(temp_board, 2, new_tdt, temp_board_big, ji + 1, alpha, beta);  // קורא לפונקציה מינמקס עם ji+1
                    best_score = Math.max(best_score, score); //לוקח את הסכום הגבוה מבין השנים
                    alpha = Math.max(alpha, best_score); //חיתוך אלפא ביטא
                    if (beta <= alpha) return best_score; // חיתוך
                }
            }
        }
        return best_score; //מחזיר
    }
    else { // MIN - השחקן
        let best_score = Infinity;
        for (let i = ii; i < iii; i++) { //לולאה של איפה אפשר לשים
            for (let d = dd; d < ddd; d++) { //לולאה של איפה אפשר לשים
                let smallRow = Math.floor(i / 3); //מגלה שורה בלוח הגדול
                let smallCol = Math.floor(d / 3); //מגלה עמודה בלוח הגדול
                if (board[i][d] == 0 && boardbig[smallRow][smallCol] == 0) { //אם לא ניצחו במקום הזה ולא שמו בוא עדיין אז:
                    let tid = smallRow * 27 + smallCol * 9 + (i % 3) * 3 + (d % 3); //מגלה את ה ID של המקום
                    let c = tid % 3;
                    let r = Math.floor(tid % 9 / 3);
                    let new_tdt = r * 10 + c; // מגלה מה ה TDT החדש
                    const temp_board = board.map(row => [...row]); //מעתיק את הלוח הקטן
                    const temp_board_big = boardbig.map(row => [...row]); //מעטיק את הלוח הגדול
                    temp_board[i][d] = 2; //מציב במקום 2
                    if_win_small_minmax(temp_board, temp_board_big, i, d); // שולח לפונקציה שבודקת עם יש ניצחון ואם כן משנה בהתאם
                    let score = minmax(temp_board, 1, new_tdt, temp_board_big, ji + 1, alpha, beta); // קורא לפונקציה מינמקס עם ji+1
                    best_score = Math.min(best_score, score); //לוקח את הסכום הנמוך מבין השנים
                    beta = Math.min(beta, best_score); //חיתוך אלפא ביטא
                    if (beta <= alpha) return best_score; // חיתוך
                }
            }
        }
        return best_score; //מחזיר
    }
}


function evaluateBoard(smallBoards, bigBoard) {
    let score = 0;

    // ניקוד על כל לוח קטן
    for (let row = 0; row < 9; row += 3) {
        for (let col = 0; col < 9; col += 3) {
            let weight = getWeight(row, col); // חשיבות לפי מיקום
            score += evaluateSmallBoard(smallBoards, row, col) * weight;
        }
    }

    // ניקוד על הלוח הגדול
    score += evaluateBigBoard(bigBoard);

    return score;
}

function getWeight(r, c) {
    // מרכזי = הכי חשוב
    if (r === 3 && c === 3) return 3;
    // פינות גדולות
    if ((r === 0 || r === 6) && (c === 0 || c === 6)) return 2;
    // צדדים
    return 1.5;
}

function evaluateSmallBoard(board, r, c) {
    let score = 0;
    let lines = []; //מערך

    // שם במערך את כל השורות והעמודות של הלוח
    for (let i = 0; i < 3; i++) {
        lines.push([board[r + i][c], board[r + i][c + 1], board[r + i][c + 2]]);
        lines.push([board[r][c + i], board[r + 1][c + i], board[r + 2][c + i]]);
    }
    // ואת האלכסונים
    lines.push([board[r][c], board[r + 1][c + 1], board[r + 2][c + 2]]);
    lines.push([board[r + 2][c], board[r + 1][c + 1], board[r][c + 2]]);
    //המערך נראה משהו כמו:
    //{1,0,0}
    //{2,0,1}...

    for (let line of lines) { //עובר על כל שורה/אלכסון ששם ושולח אותו לפונציה הבאה
        score += evaluateLine(line);
    }
    return score; //מחזיר סכום
}

function evaluateLine(line) {
    let xCount = line.filter(x => x === 1).length; //סופר כמה תאים עם איקס יש
    let oCount = line.filter(x => x === 2).length; // סופר כמה תאים עם עיגול יש
    let empty = 3 - xCount - oCount; //עושה 3 מינוס מה שיצא כדי להגיע לכמה תאים רקים יש

    // אם שני הצדדים נמצאים בשורה - אין ערך
    if (xCount > 0 && oCount > 0) return 0;


    if (xCount === 2 && empty === 1) return 50; //אם יש 2 איקס והשאר ריק מחזיר 50
    if (xCount === 1 && empty === 2) return 10; //אם יש איקס אחד והשאר ריק מחזיר 10


    if (oCount === 2 && empty === 1) return -50; //אותו דבר רק הפוך
    if (oCount === 1 && empty === 2) return -10; //אותו דבר רק הפוך

    return 0;
}

function evaluateBigBoard(board) {
    let score = 0;
    let lines = []; //מערך

    // שם במערך את כל השורות והעמודות של הלוח
    for (let i = 0; i < 3; i++) {
        lines.push([board[i][0], board[i][1], board[i][2]]);
        lines.push([board[0][i], board[1][i], board[2][i]]);
    }

    //ואת האלכסונים
    lines.push([board[0][0], board[1][1], board[2][2]]);
    lines.push([board[0][2], board[1][1], board[2][0]]);

    for (let line of lines) { //עובר על כל שורה/אלכסון ששם ושולח אותו לפונציה הבאה
        score += evaluateBigLine(line);
    }

    //  בונוס מיוחד ללוח האמצעי של הלוח הגדול
    if (board[1][1] === 1) score += 2000;
    if (board[1][1] === 2) score -= 2000;

    return score;
}

function evaluateBigLine(line) {
    let xCount = line.filter(x => x === 1).length; //סופר כמה תאים עם איקס יש
    let oCount = line.filter(x => x === 2).length; // סופר כמה תאים עם עיגול יש
    let empty = 3 - xCount - oCount; //עושה 3 מינוס מה שיצא כדי להגיע לכמה תאים רקים יש

    if (xCount > 0 && oCount > 0) return 0; // אם שני הצדדים נמצאים בשורה - אין ערך

    if (xCount === 3) return Infinity; // ניצחון גדול
    if (xCount === 2 && empty === 1) return 5000; //אם יש 2 איקס והשאר ריק מחזיר 5000
    if (xCount === 1 && empty === 2) return 1000; //אם יש 1 איקס והשאר ריק מחזיר 1000

    if (oCount === 3) return -Infinity; //נצחון גדול
    if (oCount === 2 && empty === 1) return -5000; //אם יש 2 עיגול והשאר ריק מחזיר -5000
    if (oCount === 1 && empty === 2) return -1000; //אם יש 1 עיגול והשאר ריק מחזיר -1000

    return 0;
}



function if_win_small_minmax(arrs, arrb, row, col) {
    let winsmalll = winsmall(arrs, row, col);
    if (winsmalll != 0) { //אם יש ניצחון קטן
        let tid = Math.floor(row / 3) * 27 + Math.floor(col / 3) * 9 + row % 3 * 3 + col % 3; //מגלה את תחילתת הלוח הקטן שנוצח
        let rrrr = Math.floor(tid / 9 / 3); //מגלה את המיקום שלו במשתנה הגדול
        let cccc = Math.floor(tid / 9) % 3; //מגלה את המיקום שלו במשתנה הגדול
        if (winsmalll == 1) { //אם 1 ניצח
            arrb[rrrr][cccc] = 1; //מציב במשתנה הדו ממדי הגדול
        }
        else { // רק 2 ניצח
            arrb[rrrr][cccc] = 2; //מציב במשתנה הדו ממדי הגדול
        }
        let c = tid % 3; /*מגלה את מספר העמודה של הכפתור ביחס ל 9 הכפתורים*/
        let r = Math.floor(tid % 9 / 3); /*מגלה את מספר השורה של הכפתור ביחס ל 9 הכפתורים*/
        for (let dotr = row - row % 3; dotr < row - row % 3 + 3; dotr++) { /*מגלה את ההתחלה של העמודה ביחס ל9 כפתורים*/
            for (let dotc = col - col % 3; dotc < col - col % 3 + 3; dotc++) { /*מגלה את ההתחלה של העמודה ביחס ל9 כפתורים*/
                arrs[dotr][dotc] = 3; //מציב שם 3 כדי שידעו שנוצח שם
            }
        }

    }
    else { //אם לא היה ניצחון
        if (tekosmall(row, col) == 1) { //בודק אם היה תיקו
            for (let dotr = row - row % 3; dotr < row - row % 3 + 3; dotr++) { /*מגלה את ההתחלה של העמודה ביחס ל9 כפתורים*/
                for (let dotc = col - col % 3; dotc < col - col % 3 + 3; dotc++) { /*מגלה את ההתחלה של העמודה ביחס ל9 כפתורים*/
                    arrs[dotr][dotc] = 3; //מציב שם 3 כדי שידעו שיש שם תיקו
                }
            }
        }
    }

}
// פונקציה ליצירת כפתור הריסטרט והצבתו במרכז המסך
function showRestartButton() {
    if (document.getElementById("restart-btn")) return; // מונע יצירה כפולה

    let btn = document.createElement("button");
    btn.id = "restart-btn";
    btn.innerText = "Restart";
    btn.onclick = resetGame;

    // הגדרת הגודל והמיקום במרכז המסך
    btn.style.width = "100px";
    btn.style.height = "30px";
    btn.style.position = "fixed";
    btn.style.top = "50%";
    btn.style.left = "50%";
    btn.style.transform = "translate(-50%, -50%)";
    btn.style.zIndex = "1000";
    btn.style.cursor = "pointer";

    document.body.appendChild(btn);
}

// פונקציה לאיפוס מלא של הנתונים והחזרת מסך בחירת המצב והסקינים
function resetGame() {
    // איפוס המשתנים המרכזיים
    win = 0;
    tor = 1;
    tds = 100;
    igf = 0;
    jhg = 0;
    vsComputer = true;
    // איפוס המערך הקטן
    for (let i = 0; i < 9; i++) {
        for (let s = 0; s < 9; s++) {
            arrsmall[i][s] = 0;
        }
    }

    // איפוס המערך הגדול
    for (let i = 0; i < 3; i++) {
        for (let s = 0; s < 3; s++) {
            arrbig[i][s] = 0;
        }
    }

    // מחיקת הלוח והסרת כפתור הריסטרט
    document.getElementById("play").innerHTML = "";
    let btn = document.getElementById("restart-btn");
    if (btn) btn.remove();

    // ניקוי אלמנטים של תצוגת ניצחון
    let winElem = document.getElementById("win");
    if (winElem) {
        winElem.style.backgroundImage = "none";
        winElem.style.backgroundColor = "";
    }
    document.getElementById("www").innerHTML = "";
    document.getElementById("error").innerHTML = "";


    document.getElementById("mode-selector").innerHTML = `<h2 style="font-family: sans-serif;">Select a game mode (before selecting a skin):</h2>
        <button id="btn-vs-cpu" onclick="setGameMode(true)" style="font-size: 20px; padding: 10px 20px; margin: 5px; cursor: pointer; border-radius: 10px; border: 2px solid #333; background-color: #a0ffa0;">Play VS computer</button>
        <button id="btn-1v1" onclick="setGameMode(false)" style="font-size: 20px; padding: 10px 20px; margin: 5px; cursor: pointer; border-radius: 10px; border: 2px solid #333; background-color: #fff;">Play one VS one</button>`;
    document.getElementById("play").innerHTML = `<br />
            <br />
            <br />

            <span onclick="bodi()" style="font-size:x-large;">w</span><span style="font-size:x-large">hich skin do you </span><span onclick="tomjery()" style="font-size:x-large">want</span><span onclick="namer()" style="font-size:x-large;">?</span>
            <br />
            <br />
            <span>
                <button class="skinb" onclick="xo()">
                    <img class="skin" src="pic to xo o.webp" />
                    <img class="skin" src="pic to xo x.webp" />
                </button>
                <br />
                <br />
                <button class="skinb" onclick="basc()">
                    <img class="skin" src="pic to xo fut.webp" />
                    <img class="skin" src="pic to xo basc.webp" />
                </button>
            </span>`;

}