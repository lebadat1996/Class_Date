//xay duong class MyDate voi 3 tham so truyen vao.
let MyDate = function (day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
    //xay dung phuong thuc tra ve ngay thang nam
    this.getDay = function () {
        return this.day;
    };
    this.getMonth = function () {
        return this.month;
    };
    this.getYear = function () {
        return this.year;
    };
    //xay duong phuong thuc dat lai gia tri ngay thang nam.
    this.setDay = function (day) {
        this.day = day;
    };
    this.setMonth = function (month) {
        this.month = month;
    };
    this.setYear = function (year) {
        this.year = year;
    };
    //Cài đặt thêm phương thức setDate() để thiết đặt lại ngày, tháng, năm cho đối tượng MyDate
    this.setDate = function (day,month,year) {
        this.setDay(day);
        this.setMonth(month);
        this.setYear(year);

    };
    //phương thức toString() để trả về chuỗi ngày tháng năm theo định dạng dd/mm/yyyy.
    this.toString = function () {
            return 'thong tin cua doi tuong Date la: ' + this.getDay() + '/'+this.getMonth() + '/'+this.getYear();
    }
};
let date = new MyDate(3, 3, 2020);
let day = date.getDay();
let month = date.getMonth();
let year = date.getYear();
alert(day + "/" + month + "/" + year);
date.setDay(10);
day = date.getDay();
date.setMonth(10);
month = date.getMonth();
date.setYear(2020);
year = date.getYear();
alert(day + "/" + month + "/" + year);
date.setDate('1','2','2020');
alert(date.toString());