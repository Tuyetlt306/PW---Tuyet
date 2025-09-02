import {test} from '@playwright/test';
const notes = {
   note1: {
        title: 'Lãnh đạo Khoa học và Công nghệ qua các thời kỳ',
        desc: 'Thành lập từ năm 1958, cơ quan'
    },
   note2: {
    title: 'Samsung có thể ra kính thông minh, smartphone gập ba cuối tháng 9',
    desc: 'Samsung được cho là'
   },
   note3: {
    title: 'Những vật thể nhân tạo bất tử bay xuyên vũ trụ',
    desc: 'Một số vật thể nhân tạo k'
   },
   note4: {
    title: 'Mối quan hệ tỷ USD giữa Meta và Scale AI rạn nứt',
    desc: 'hăn khi ph'
   },
   note5: {
    title: 'Nhà tuyển dụng Mỹ chuộng ứng viên biết dùng Excel',
    desc: 'cel vẫn là kỹ năng được săn đón hàng đầu trong lĩnh vực công nghệ.'
   },
   note6: {
    title: 'Tốc độ phát triển AI tiên tiến đang chững lại',
    desc: 'ngôn ngữ lớn, tốc độ phát triển của AI tiên '
   },
   note7: {
    title: 'Chữ "và" trên con đường phát triển AI Việt Nam',
    desc: 'Theo Bộ trưởng Khoa học và Công nghệ Nguyễn Mạnh Hùng, nếu p'
   },
   note8: {
    title: 'CEO DeepSeek, Huawei lọt top 100 người ảnh hưởng nhất giới AI',
    desc: 'Lãnh đạo một số công ty công nghệ T'
   },
   note9: {
    title: 'Đà Nẵng hợp tác với đối tác quốc tế để thúc đẩy hệ sinh thái blockchain',
    desc: 'Đà Nẵng ký biên bản hợp tác với sàn giao Bybit ... '
   },
   note10: {
    title: 'Tại sao các nhà khoa học tìm cách trồng cây trong vũ trụ?',
    desc: 'ghiệt nhằm cung cấp thực phẩm, dược phẩm, vật liệu xây dựng cho công cuộc khám phá vũ trụ.'
   } 
}
    
test('Add 10 notes', async({page}) => {
   await page.goto('https://material.playwrightvn.com/04-xpath-personal-notes.html');
   await test.step('add 10 notes', async() => {
   for (const a in notes){
    const note = notes[a]
    await page.locator('//input[@id="note-title"]').fill(note.title)
    await page.locator('//textarea[@id="note-content"]').fill(note.desc)
    await page.locator('//button[@id="add-note"]').click()
}})
await test.step('search', async() => {
    await page.locator('//input[@id="search"]').fill('abc')
})
    })
