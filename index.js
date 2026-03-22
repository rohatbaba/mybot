const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'seninserver.aternos.me',
  port: 25565,
  username: 'AFK_Bot_123'
});

bot.on('spawn', () => {
  console.log('Bot giriş yaptı');

  setInterval(() => {
    bot.setControlState('jump', true);
    setTimeout(() => bot.setControlState('jump', false), 500);
  }, 30000);
});

// 💥 HATALARI GÖSTER
bot.on('error', (err) => {
  console.log('HATA:', err);
});

bot.on('end', () => {
  console.log('Bot atıldı veya çıktı');
});
