module.exports.config = {
	name: "botjoin",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "Phước(NVP)",
	description: "Noti Bot Join",
	commandCategory: "Tán gái",
	cooldowns: 0
};

module.exports.run = ({ event, api }) => api.sendMessage(`↱ Kết nối thành công ↲\n In tư Admin bot đẹp trai :))): https://www.facebook.com/NVP.Vanphuoc\n\nBot Thường Update Vào 11h trưa và 8h Tối Nhé\n\nDùng Luật bot Để Không Bị Ban Nhé\n\n🌸 Chúc các bạn sử dụng bot vui vẻ 🌸`, event.threadID, event.messageID);