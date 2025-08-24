// 1. Khởi động tàu vũ trụ K17
// Hành trình khởi đầu
const departurePlanet = "Trái Đất";
// Nhiệm vụ
const mission = "Khám phá Vũ trụ K17";
// Phi hành đoàn
let crew = [
  "Tuyet",
  "Thao",
  "Yen",
  "Tung Anh",
  "Thinh",
  "Xuan",
  "Nga",
  "Duom",
  "Ngoc Co",
  "Linh",
];
// Khởi động tàu
function launchShip(crew) {
  return `Chuẩn bị khởi động! Phi hành đoàn gồm: "${crew.join(
    ", "
  )}" sẽ đồng hành cùng bạn trong chuyến
phiêu lưu "${mission}"!.`;
}
// Kết nối với trung tâm điều khiển
console.log(launchShip(crew));

// 2. Du hành đến hành tinh bí ẩn
// Tính khoảng cách đến hành tinh bí ẩn
function calculateDistance(speed, time) {
  return speed * time;
} // Công thức: khoảng cách = speed * time
let speed = "1000"; // km/h
let time = "24"; // thời gian di chuyển tính bằng giờ
console.log(`Khoảng cách tính toán được là ${calculateDistance(speed, time)}`);

// 3. Hành tinh kỳ lạ
let time1 = 120; // thời gian ở hành tinh bí ẩn tính bằng giây
let convertTimetoHex = time1.toString(16);
console.log(`120 giây ở Trái đất tương đương ${convertTimetoHex} giây ở hành tinh bí ẩn`);

// 4. Khám phá kho báu
let decryptCode = "K17 Challenge";
function code(letter){
    return letter.split ("") .map(input => {
    if (input >= "A" && input <= "Z")return input.toLowerCase();
    else if (input >= "a" && input <= "z")return input.toUpperCase();
else return input;
}) .join("")
}
console.log(code(decryptCode))

//5. Trở về Trái Đất
function returnToEarth(){console.log('Chuẩn bị trở về Trái Đát')}
returnToEarth()

