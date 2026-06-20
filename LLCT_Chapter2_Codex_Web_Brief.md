# CODEx IMPLEMENTATION BRIEF  
## Web thuyết trình LLCT – Chương 2: Đảng lãnh đạo hai cuộc kháng chiến, hoàn thành giải phóng dân tộc, thống nhất đất nước (1945–1975)

> Mục tiêu: Xây dựng một **web thuyết trình tương tác** thay cho slide tĩnh. Sản phẩm phải là **trung tâm của buổi trình bày**, có bố cục rõ ràng, nội dung bám giáo trình, có phân tích logic, gắn với Learning Outcomes (LO), có yếu tố thu hút khán giả, có minh bạch AI Usage, và có liên hệ bối cảnh xã hội – kinh tế – chính trị hiện nay.

---

# 1. BỐI CẢNH ĐỀ BÀI

## 1.1. Chủ đề chính

**Chương 2: Đảng lãnh đạo hai cuộc kháng chiến, hoàn thành giải phóng dân tộc, thống nhất đất nước (1945–1975)**

Tập trung vào các phần:

1. **2.1.4. Ý nghĩa lịch sử và kinh nghiệm của Đảng trong lãnh đạo kháng chiến chống thực dân Pháp và can thiệp Mỹ**
2. **2.2.1. Sự lãnh đạo của Đảng đối với cách mạng hai miền Nam – Bắc (1954–1965)**
   - Phần a: **Khôi phục kinh tế, cải tạo xã hội chủ nghĩa ở miền Bắc, chuyển cách mạng miền Nam từ thế giữ gìn lực lượng sang thế tiến công (1954–1960)**
   - Phần b: **Xây dựng chủ nghĩa xã hội ở miền Bắc, phát triển thế tiến công của cách mạng miền Nam (1961–1965)**

## 1.2. Yêu cầu đánh giá cần đáp ứng

Sản phẩm cần đáp ứng các tiêu chí:

- Vận dụng đúng lý thuyết.
- Phân tích logic, không chỉ kể sự kiện.
- Gắn kết với LO.
- Trình bày sinh động, có ý tưởng rõ ràng về cách tương tác trong buổi thuyết trình.
- Sản phẩm là trung tâm của phần trình bày, không phải file phụ.
- Có yếu tố thu hút khán giả.
- Có slide/phụ lục **AI Usage** minh bạch:
  - Công cụ AI đã dùng.
  - Mục đích sử dụng.
  - Prompt chính.
  - Kết quả AI tạo ra.
  - Phần sinh viên đã chỉnh sửa/biên soạn.
- Có cam kết không để AI làm thay hoàn toàn.
- Có đối chiếu nguồn chính thống.
- Có liên hệ bối cảnh xã hội, kinh tế – chính trị hiện nay.

---

# 2. Ý TƯỞNG SẢN PHẨM

## 2.1. Tên sản phẩm

**“Hai miền – Một mục tiêu: Hành trình lãnh đạo cách mạng Việt Nam 1945–1965”**

## 2.2. Hình thức

Xây dựng một **single-page interactive presentation website** bằng React + TypeScript.

Không làm video.  
Không làm trò chơi.  
Nhưng có thể có:

- Timeline tương tác.
- Card phân tích sự kiện.
- Bản đồ khái niệm hai miền Nam – Bắc.
- Section so sánh vai trò hai miền.
- Khối “Phân tích – Không chỉ kể sự kiện”.
- Khối “Liên hệ hiện nay”.
- Khối “AI Usage & Academic Integrity”.
- Hiệu ứng scroll reveal, hover, sticky navigation, progress bar.

## 2.3. Cách trình bày trong buổi thuyết trình

Trang web được mở toàn màn hình. Người thuyết trình cuộn theo từng section như một slide động.

Mỗi section tương ứng với một phần nói:

1. Mở đầu – Hook.
2. Bối cảnh lịch sử.
3. Kháng chiến chống Pháp: ý nghĩa và kinh nghiệm.
4. Miền Bắc 1954–1960.
5. Miền Nam 1954–1960.
6. Đại hội III và đường lối hai chiến lược.
7. Miền Bắc 1961–1965.
8. Miền Nam 1961–1965.
9. Phân tích logic và LO mapping.
10. Liên hệ hiện nay.
11. AI Usage.
12. Kết luận.

---

# 3. LEARNING OUTCOMES – LO MAPPING

## 3.1. Đề xuất LO cho bài thuyết trình

Dùng 4 LO sau để gắn với từng nội dung:

### LO1 – Nhận diện bối cảnh lịch sử
Người học trình bày được bối cảnh Việt Nam sau năm 1945 và sau Hiệp định Giơnevơ 1954.

### LO2 – Phân tích đường lối lãnh đạo của Đảng
Người học phân tích được cách Đảng xác định nhiệm vụ chiến lược trong từng giai đoạn và từng miền.

### LO3 – Đánh giá ý nghĩa và kinh nghiệm lịch sử
Người học đánh giá được ý nghĩa lịch sử, nguyên nhân thắng lợi và kinh nghiệm lãnh đạo của Đảng.

### LO4 – Liên hệ thực tiễn hiện nay
Người học liên hệ được bài học lịch sử với bối cảnh xây dựng, bảo vệ và phát triển đất nước hiện nay.

## 3.2. Gắn LO vào từng section

| Section | Nội dung | LO |
|---|---|---|
| Hero | Giới thiệu chủ đề, vấn đề trung tâm | LO1 |
| Context | Bối cảnh 1945–1954 và 1954–1965 | LO1 |
| Anti-French War | Ý nghĩa, kinh nghiệm chống Pháp | LO2, LO3 |
| North 1954–1960 | Khôi phục kinh tế, cải tạo XHCN | LO2 |
| South 1954–1960 | Chuyển từ giữ gìn lực lượng sang tiến công | LO2, LO3 |
| Party Congress III | Đường lối hai chiến lược | LO2, LO3 |
| North 1961–1965 | Xây dựng CNXH, chi viện miền Nam | LO2, LO3 |
| South 1961–1965 | Đánh bại Chiến tranh đặc biệt | LO2, LO3 |
| Logic Map | Sơ đồ phân tích nhân – quả | LO2, LO3 |
| Modern Link | Liên hệ hiện nay | LO4 |
| AI Usage | Minh bạch và liêm chính học thuật | LO4 |
| Conclusion | Tổng kết | LO3, LO4 |

---

# 4. TECH STACK

Use current project structure if available. Do not change the large architecture.

Recommended:

- React + TypeScript
- Vite
- CSS Modules or plain CSS files
- Framer Motion if already installed. If not installed, use CSS animation + IntersectionObserver.
- No backend required.
- No external API required.
- Content should be separated into data files for easy editing.

---

# 5. ROUTE AND FILE STRUCTURE

## 5.1. Target route

Create route:

```txt
/llct-chapter-2
```

Page title:

```txt
LLCT Chapter 2 Presentation
```

## 5.2. Suggested folder structure

Create a dedicated feature folder:

```txt
src/features/LLCTChapter2/
  index.ts
  LLCTChapter2Page.tsx
  LLCTChapter2Page.css

  data/
    heroContent.ts
    timelineData.ts
    sectionContent.ts
    loMapping.ts
    aiUsage.ts
    modernContext.ts
    references.ts

  components/
    HeroSection.tsx
    StickyNav.tsx
    ProgressBar.tsx
    SectionTitle.tsx
    TimelineSection.tsx
    TwoRegionMap.tsx
    AnalysisCard.tsx
    EvidenceCard.tsx
    LOMapSection.tsx
    ModernContextSection.tsx
    AIUsageSection.tsx
    ConclusionSection.tsx
    SpeakerNotes.tsx
    ReferenceSection.tsx
```

If the project already has a different folder convention, follow existing naming conventions.

Do not delete old files.  
Do not rename unrelated files.  
Only add/modify files required for this page and route.

---

# 6. UI / UX DIRECTION

## 6.1. Visual concept

Theme: **Historic – Modern – Academic**

The website should feel like a modern museum/history presentation.

Use visual metaphors:

- “Hai miền – Một mục tiêu”
- Timeline 1945–1965
- North/South split layout
- Red line as revolutionary path
- Gold highlights for key turning points
- Paper texture / archive style background
- Modern cards for analysis and LO mapping

## 6.2. Color palette

Use CSS variables:

```css
:root {
  --bg-main: #0f1117;
  --bg-section: #161922;
  --bg-card: rgba(255, 255, 255, 0.06);
  --text-main: #f5efe6;
  --text-muted: #c9beb0;
  --red-primary: #b91c1c;
  --red-glow: #ef4444;
  --gold-primary: #f5c542;
  --gold-soft: #f8e2a1;
  --border-soft: rgba(255, 255, 255, 0.12);
}
```

## 6.3. Typography

Use system fonts if no custom font is installed.

Suggested:

```css
font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

For historical headings, use:

```css
font-family: Georgia, "Times New Roman", serif;
```

## 6.4. Layout style

- Full-width hero.
- Sticky top navigation.
- Scroll progress bar.
- Each major topic is one full section.
- Use alternating layout:
  - Text left, visual card right.
  - Timeline full-width.
  - Two-column North/South comparison.
  - Analysis cards in grid.
- Use large headings, short paragraphs, bullet highlights.
- Add speaker notes collapsible under each section.

---

# 7. ANIMATION REQUIREMENTS

Use lightweight effects:

## 7.1. Scroll reveal

Each section/card should fade in and translate upward when entering viewport.

CSS approach:

```css
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

Use IntersectionObserver in a hook or inside page component.

## 7.2. Hover effects

Cards should have:

- Slight lift.
- Border glow.
- Gold/red accent line.

```css
.analysis-card:hover {
  transform: translateY(-6px);
  border-color: rgba(245, 197, 66, 0.45);
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.28);
}
```

## 7.3. Progress bar

At top of page, show reading/presentation progress.

## 7.4. Timeline animation

Timeline items should appear sequentially while scrolling.

## 7.5. Reduced motion

Respect accessibility:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

---

# 8. CONTENT STRUCTURE FOR THE WEB

## 8.1. Hero Section

Component: `HeroSection.tsx`

Content:

```ts
export const heroContent = {
  eyebrow: "Lý luận chính trị | Chương 2",
  title: "Hai miền – Một mục tiêu",
  subtitle: "Đảng lãnh đạo cách mạng Việt Nam từ kháng chiến chống Pháp đến xây dựng miền Bắc và đấu tranh giải phóng miền Nam giai đoạn 1954–1965.",
  coreQuestion: "Vì sao đường lối tiến hành đồng thời hai chiến lược cách mạng ở hai miền là lựa chọn đúng đắn và sáng tạo của Đảng?",
  tags: ["1945–1975", "1954–1965", "Miền Bắc hậu phương", "Miền Nam tiền tuyến", "Thống nhất đất nước"]
};
```

UI:

- Big title.
- Background gradient dark red.
- Abstract map-like line.
- CTA buttons:
  - “Bắt đầu thuyết trình”
  - “Xem LO Mapping”
  - “AI Usage”

---

## 8.2. Section: Bối cảnh lịch sử

Component: `TimelineSection.tsx`

Timeline data:

```ts
export const timelineData = [
  {
    year: "1945",
    title: "Cách mạng Tháng Tám thành công",
    description: "Nước Việt Nam Dân chủ Cộng hòa ra đời, nhưng chính quyền cách mạng non trẻ phải đối mặt với thù trong, giặc ngoài.",
    meaning: "Mở đầu nhiệm vụ bảo vệ chính quyền cách mạng và nền độc lập dân tộc."
  },
  {
    year: "1946–1954",
    title: "Kháng chiến chống thực dân Pháp",
    description: "Đảng lãnh đạo toàn dân tiến hành kháng chiến toàn dân, toàn diện, lâu dài, dựa vào sức mình là chính.",
    meaning: "Tạo nền tảng cho thắng lợi Điện Biên Phủ và Hiệp định Giơnevơ."
  },
  {
    year: "7/1954",
    title: "Hiệp định Giơnevơ",
    description: "Miền Bắc được giải phóng, đất nước tạm thời chia làm hai miền với hai chế độ chính trị khác nhau.",
    meaning: "Đặt ra yêu cầu xây dựng đường lối cách mạng mới cho cả nước."
  },
  {
    year: "1959–1960",
    title: "Nghị quyết 15 và phong trào Đồng khởi",
    description: "Cách mạng miền Nam chuyển từ thế giữ gìn lực lượng sang thế tiến công.",
    meaning: "Tạo bước ngoặt cho cách mạng miền Nam."
  },
  {
    year: "9/1960",
    title: "Đại hội III của Đảng",
    description: "Xác định đường lối tiến hành đồng thời hai chiến lược cách mạng ở hai miền.",
    meaning: "Hoàn chỉnh đường lối chiến lược chung của cách mạng Việt Nam."
  },
  {
    year: "1961–1965",
    title: "Đánh bại Chiến tranh đặc biệt",
    description: "Miền Bắc xây dựng CNXH, chi viện miền Nam; miền Nam phát triển thế tiến công, làm phá sản chiến lược Chiến tranh đặc biệt của Mỹ.",
    meaning: "Chuẩn bị cơ sở cho giai đoạn chống Mỹ quyết liệt sau năm 1965."
  }
];
```

---

## 8.3. Section: Kháng chiến chống Pháp – Ý nghĩa và kinh nghiệm

Component: `AnalysisCard.tsx`

Create 2 groups: Meaning and Lessons.

### Meaning cards

```ts
export const antiFrenchWarMeaning = [
  {
    title: "Bảo vệ thành quả Cách mạng Tháng Tám",
    content: "Thắng lợi kháng chiến chống Pháp giữ vững chính quyền cách mạng và khẳng định quyền độc lập của dân tộc Việt Nam."
  },
  {
    title: "Buộc Pháp ký Hiệp định Giơnevơ",
    content: "Thực dân Pháp phải công nhận các quyền dân tộc cơ bản của Việt Nam, Lào và Campuchia."
  },
  {
    title: "Giải phóng miền Bắc",
    content: "Miền Bắc trở thành căn cứ địa cách mạng và hậu phương lớn cho sự nghiệp đấu tranh thống nhất đất nước."
  },
  {
    title: "Cổ vũ phong trào giải phóng dân tộc",
    content: "Thắng lợi của Việt Nam góp phần thúc đẩy phong trào chống chủ nghĩa thực dân trên thế giới."
  }
];
```

### Lesson cards

```ts
export const antiFrenchWarLessons = [
  {
    title: "Đường lối kháng chiến đúng đắn",
    content: "Toàn dân, toàn diện, lâu dài, dựa vào sức mình là chính."
  },
  {
    title: "Kết hợp kháng chiến với kiến quốc",
    content: "Vừa chiến đấu, vừa xây dựng chính quyền, kinh tế, văn hóa, giáo dục."
  },
  {
    title: "Phát huy chiến tranh nhân dân",
    content: "Kết hợp lực lượng chính trị và lực lượng vũ trang, chiến tranh du kích và chính quy."
  },
  {
    title: "Đoàn kết dân tộc và quốc tế",
    content: "Phát huy khối đại đoàn kết toàn dân, đồng thời tranh thủ sự ủng hộ của bạn bè quốc tế."
  },
  {
    title: "Vai trò quyết định của Đảng",
    content: "Đảng đề ra đường lối phù hợp, biết điều chỉnh chiến lược và tổ chức lực lượng."
  }
];
```

---

## 8.4. Section: Miền Bắc 1954–1960

Component: `TwoRegionMap.tsx` or `EvidenceCard.tsx`

Title:

**Miền Bắc: Khôi phục kinh tế, cải tạo xã hội chủ nghĩa, xây dựng hậu phương**

Content:

```ts
export const north1954to1960 = {
  title: "Miền Bắc 1954–1960",
  thesis: "Sau Hiệp định Giơnevơ, miền Bắc được giải phóng nhưng kinh tế nghèo nàn, hậu quả chiến tranh nặng nề. Đảng xác định nhiệm vụ trước mắt là ổn định xã hội, khôi phục kinh tế và từng bước đưa miền Bắc quá độ lên chủ nghĩa xã hội.",
  keyPoints: [
    "Hàn gắn vết thương chiến tranh, phục hồi kinh tế quốc dân.",
    "Lấy khôi phục và phát triển nông nghiệp làm trọng tâm.",
    "Khôi phục công nghiệp, tiểu thủ công nghiệp, giao thông vận tải.",
    "Tiếp tục cải cách ruộng đất, xóa bỏ chế độ chiếm hữu ruộng đất phong kiến.",
    "Nghiêm khắc sửa sai trong cải cách ruộng đất.",
    "Tiến hành kế hoạch 3 năm 1958–1960 về phát triển kinh tế, văn hóa và cải tạo xã hội chủ nghĩa.",
    "Xây dựng hợp tác xã trên nguyên tắc tự nguyện, cùng có lợi, quản lý dân chủ.",
    "Củng cố miền Bắc thành cơ sở vững mạnh cho đấu tranh thống nhất nước nhà."
  ],
  analysis: "Logic lãnh đạo của Đảng là: muốn đấu tranh thống nhất đất nước lâu dài thì phải có hậu phương ổn định. Vì vậy, xây dựng miền Bắc không tách rời nhiệm vụ giải phóng miền Nam, mà là điều kiện chiến lược để cả nước tiến lên."
};
```

Visual:

- Left: content.
- Right: “Hậu phương lớn” card with 3 layers:
  1. Chính trị ổn định.
  2. Kinh tế phục hồi.
  3. Cơ sở xã hội chủ nghĩa.

---

## 8.5. Section: Miền Nam 1954–1960

Title:

**Miền Nam: Từ giữ gìn lực lượng sang thế tiến công**

Content:

```ts
export const south1954to1960 = {
  title: "Miền Nam 1954–1960",
  thesis: "Ở miền Nam, Mỹ thay chân Pháp, dựng chính quyền Ngô Đình Diệm, phá hoại Hiệp định Giơnevơ và đàn áp phong trào cách mạng. Đảng từng bước chuyển phương thức đấu tranh từ chính trị, giữ gìn lực lượng sang kết hợp chính trị với vũ trang.",
  keyPoints: [
    "Mỹ – Diệm phá hoại tổng tuyển cử thống nhất đất nước.",
    "Thực hiện chính sách 'tố cộng, diệt cộng', khủng bố lực lượng yêu nước.",
    "Ban đầu Đảng chủ trương đấu tranh chính trị, đòi thi hành Hiệp định Giơnevơ.",
    "Tháng 1/1959, Nghị quyết Trung ương 15 xác định con đường sử dụng bạo lực cách mạng.",
    "Kết hợp đấu tranh chính trị với đấu tranh vũ trang.",
    "Phong trào Đồng khởi 1960 bùng nổ ở Bến Tre và lan rộng.",
    "Ngày 20/12/1960, Mặt trận Dân tộc giải phóng miền Nam Việt Nam ra đời."
  ],
  analysis: "Điểm logic quan trọng: sự chuyển hướng đấu tranh không phải là nóng vội, mà xuất phát từ thực tiễn địch khủng bố tàn bạo và con đường hòa bình bị phá hoại. Nghị quyết 15 tạo cơ sở chính trị để cách mạng miền Nam chuyển sang thế tiến công."
};
```

Visual:

- A “before/after” transition:
  - Before: Giữ gìn lực lượng.
  - Turning point: Nghị quyết 15.
  - After: Đồng khởi – thế tiến công.

---

## 8.6. Section: Đại hội III và đường lối hai chiến lược

Title:

**Đại hội III năm 1960: Một đất nước – Hai chiến lược – Một mục tiêu**

Content:

```ts
export const partyCongressIII = {
  title: "Đại hội đại biểu toàn quốc lần thứ III của Đảng",
  date: "9/1960",
  coreIdea: "Cách mạng Việt Nam phải thực hiện đồng thời hai chiến lược khác nhau ở hai miền.",
  strategies: [
    {
      region: "Miền Bắc",
      strategy: "Cách mạng xã hội chủ nghĩa",
      role: "Giữ vai trò quyết định nhất đối với sự phát triển của toàn bộ cách mạng Việt Nam.",
      reason: "Miền Bắc là căn cứ địa, hậu phương lớn, nơi xây dựng tiềm lực chính trị, kinh tế, quốc phòng để chi viện cho miền Nam."
    },
    {
      region: "Miền Nam",
      strategy: "Cách mạng dân tộc dân chủ nhân dân",
      role: "Giữ vai trò quyết định trực tiếp đối với sự nghiệp giải phóng miền Nam.",
      reason: "Miền Nam là tiền tuyến trực tiếp đấu tranh chống Mỹ và chính quyền Sài Gòn."
    }
  ],
  conclusion: "Hai chiến lược khác nhau nhưng thống nhất ở mục tiêu chung: giải phóng miền Nam, hòa bình, thống nhất đất nước."
};
```

Visual:

- Split screen:
  - North: “Hậu phương”
  - South: “Tiền tuyến”
  - Center: “Thống nhất Tổ quốc”

---

## 8.7. Section: Miền Bắc 1961–1965

Title:

**Miền Bắc 1961–1965: Xây dựng CNXH và chi viện tiền tuyến**

Content:

```ts
export const north1961to1965 = {
  title: "Miền Bắc 1961–1965",
  thesis: "Sau Đại hội III, miền Bắc thực hiện Kế hoạch nhà nước 5 năm lần thứ nhất nhằm xây dựng bước đầu cơ sở vật chất – kỹ thuật của chủ nghĩa xã hội, đồng thời tăng cường chi viện cho miền Nam.",
  keyPoints: [
    "Thực hiện Kế hoạch nhà nước 5 năm lần thứ nhất 1961–1965.",
    "Xây dựng bước đầu cơ sở vật chất – kỹ thuật của chủ nghĩa xã hội.",
    "Thực hiện công nghiệp hóa xã hội chủ nghĩa.",
    "Hoàn thiện quan hệ sản xuất xã hội chủ nghĩa.",
    "Cải thiện đời sống nhân dân.",
    "Bảo đảm quốc phòng, an ninh.",
    "Chi viện sức người, sức của cho miền Nam qua đường 559 và đường 759.",
    "Phong trào 'Mỗi người làm việc bằng hai vì miền Nam ruột thịt' thể hiện tinh thần hậu phương lớn."
  ],
  analysis: "Miền Bắc không chỉ xây dựng cho riêng mình, mà xây dựng để làm nền tảng vật chất, chính trị và tinh thần cho cuộc đấu tranh thống nhất đất nước."
};
```

Visual:

- Supply route graphic:
  - Miền Bắc → Đường Trường Sơn / Đường Hồ Chí Minh trên biển → Miền Nam.

---

## 8.8. Section: Miền Nam 1961–1965

Title:

**Miền Nam 1961–1965: Phát triển thế tiến công, đánh bại Chiến tranh đặc biệt**

Content:

```ts
export const south1961to1965 = {
  title: "Miền Nam 1961–1965",
  thesis: "Từ năm 1961, Mỹ triển khai chiến lược 'Chiến tranh đặc biệt' với công thức cố vấn Mỹ, vũ khí Mỹ và quân đội Sài Gòn. Đảng lãnh đạo miền Nam giữ vững thế tiến công, kết hợp quân sự, chính trị và binh vận.",
  enemyStrategy: [
    "Dùng quân đội Sài Gòn làm lực lượng chủ yếu.",
    "Mỹ cung cấp cố vấn, vũ khí, phương tiện chiến tranh.",
    "Thực hiện kế hoạch bình định miền Nam.",
    "Xem 'ấp chiến lược' là quốc sách.",
    "Tăng cường càn quét, khủng bố và kiểm soát nông thôn."
  ],
  partyDirection: [
    "Giữ vững thế tiến công sau Đồng khởi.",
    "Kết hợp đấu tranh vũ trang với đấu tranh chính trị.",
    "Tiến công trên ba vùng chiến lược: đô thị, nông thôn đồng bằng, nông thôn rừng núi.",
    "Sử dụng ba mũi giáp công: quân sự, chính trị, binh vận.",
    "Vận dụng phương châm linh hoạt theo từng vùng."
  ],
  victories: [
    "Ấp Bắc 1963",
    "Bình Giã 1964",
    "Ba Gia 1965",
    "Đồng Xoài 1965"
  ],
  result: "Đến giữa năm 1965, chiến lược 'Chiến tranh đặc biệt' của Mỹ bị phá sản. Đây là thắng lợi có ý nghĩa chiến lược, tạo cơ sở để cách mạng miền Nam tiếp tục tiến lên."
};
```

Visual:

- 3x3 diagram:
  - 3 vùng: đô thị / nông thôn đồng bằng / rừng núi.
  - 3 mũi: quân sự / chính trị / binh vận.
  - 2 chân: quân sự / chính trị.

---

# 9. LOGIC ANALYSIS SECTION

Component: `LOMapSection.tsx` or `AnalysisMap.tsx`

Title:

**Từ sự kiện đến tư duy lãnh đạo**

This section is important because grading requires logical analysis.

Content:

```ts
export const logicAnalysis = [
  {
    question: "Vì sao phải xây dựng miền Bắc?",
    answer: "Vì cách mạng thống nhất đất nước là lâu dài, cần một hậu phương ổn định về chính trị, kinh tế, quốc phòng và tinh thần."
  },
  {
    question: "Vì sao miền Nam phải chuyển sang thế tiến công?",
    answer: "Vì Mỹ – Diệm phá hoại Hiệp định Giơnevơ, khủng bố phong trào yêu nước, làm con đường đấu tranh hòa bình không còn đủ điều kiện thực hiện."
  },
  {
    question: "Vì sao đường lối hai chiến lược là sáng tạo?",
    answer: "Vì Đảng không áp dụng một mô hình cứng nhắc cho cả nước, mà xác định nhiệm vụ phù hợp với điều kiện cụ thể của từng miền nhưng vẫn thống nhất ở mục tiêu chung."
  },
  {
    question: "Vì sao miền Bắc quyết định nhất, miền Nam quyết định trực tiếp?",
    answer: "Miền Bắc quyết định nhất vì là hậu phương và căn cứ địa của cả nước. Miền Nam quyết định trực tiếp vì là nơi trực tiếp đánh bại đế quốc Mỹ và chính quyền Sài Gòn."
  }
];
```

UI:

- Use accordion cards.
- Each card opens with “Sự kiện → Phân tích → Ý nghĩa”.
- Add icon arrows.

---

# 10. MODERN CONTEXT SECTION

Component: `ModernContextSection.tsx`

Title:

**Liên hệ bối cảnh xã hội – kinh tế – chính trị hiện nay**

Purpose: Show the historical lesson still has value today.

Content:

```ts
export const modernContext = [
  {
    title: "Bài học về độc lập, tự chủ trong đường lối phát triển",
    historicalLink: "Trong giai đoạn 1954–1965, Đảng giải quyết một tình huống chưa có tiền lệ: một đất nước tạm thời chia cắt, hai miền có nhiệm vụ khác nhau nhưng cùng hướng tới thống nhất.",
    modernLink: "Hiện nay, Việt Nam tiếp tục nhấn mạnh yêu cầu phát triển đất nước độc lập, tự chủ, chủ động hội nhập quốc tế và giữ vững lợi ích quốc gia – dân tộc trong bối cảnh cạnh tranh chiến lược, chuyển đổi số và toàn cầu hóa."
  },
  {
    title: "Bài học về kết hợp sức mạnh dân tộc với sức mạnh thời đại",
    historicalLink: "Trong kháng chiến, Việt Nam vừa phát huy sức mạnh toàn dân, vừa tranh thủ sự ủng hộ của các nước xã hội chủ nghĩa và nhân dân tiến bộ thế giới.",
    modernLink: "Ngày nay, bài học này thể hiện ở việc kết hợp nội lực quốc gia với tri thức, công nghệ, hợp tác quốc tế, đổi mới sáng tạo và chuyển đổi số để phát triển nhanh, bền vững."
  },
  {
    title: "Bài học về vai trò của hậu phương và nền tảng phát triển",
    historicalLink: "Miền Bắc được xây dựng thành hậu phương lớn, tạo tiềm lực vật chất và tinh thần cho tiền tuyến miền Nam.",
    modernLink: "Trong hiện tại, muốn phát triển bền vững cần xây dựng nền tảng vững chắc: thể chế, giáo dục, khoa học – công nghệ, hạ tầng số, nguồn nhân lực và niềm tin xã hội."
  },
  {
    title: "Bài học về đoàn kết xã hội",
    historicalLink: "Thắng lợi cách mạng gắn với việc tập hợp lực lượng rộng rãi, phát huy khối đại đoàn kết toàn dân.",
    modernLink: "Trong bối cảnh hiện nay, đoàn kết xã hội vẫn là điều kiện quan trọng để giải quyết các thách thức như phát triển kinh tế, chuyển đổi số, bảo vệ chủ quyền, ứng phó biến đổi khí hậu và bảo đảm an sinh."
  },
  {
    title: "Bài học về sử dụng công nghệ có trách nhiệm",
    historicalLink: "Đường lối của Đảng luôn gắn với thực tiễn, không máy móc, không sao chép.",
    modernLink: "Khi sử dụng AI trong học tập, sinh viên cần xem AI là công cụ hỗ trợ, không thay thế tư duy học thuật; phải kiểm chứng bằng giáo trình, nghị quyết, văn kiện chính thống và chịu trách nhiệm về sản phẩm cuối cùng."
  }
];
```

Add source note in `references.ts`:

```ts
export const references = [
  "Giáo trình Lịch sử Đảng Cộng sản Việt Nam / Giáo trình LLCT được giảng viên cung cấp.",
  "Văn kiện Đại hội đại biểu toàn quốc lần thứ XIII của Đảng.",
  "Nghị quyết số 57-NQ/TW ngày 22/12/2024 của Bộ Chính trị về phát triển khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số quốc gia.",
  "Các nghị quyết, văn bản chính thống liên quan do giảng viên yêu cầu đối chiếu."
];
```

---

# 11. AI USAGE SECTION

Component: `AIUsageSection.tsx`

This is required by grading.

Title:

**AI Usage & Academic Integrity**

Content:

```ts
export const aiUsage = {
  commitment: "Nhóm cam kết không để AI làm thay hoàn toàn bài thuyết trình. AI chỉ được sử dụng như công cụ hỗ trợ lên ý tưởng, tổ chức nội dung, tạo cấu trúc web và gợi ý cách trình bày. Toàn bộ nội dung cuối cùng đã được nhóm kiểm chứng, chỉnh sửa và chịu trách nhiệm.",
  tools: [
    {
      tool: "ChatGPT",
      purpose: "Tóm tắt đề bài, gợi ý cấu trúc nội dung, đề xuất bố cục web thuyết trình.",
      mainPrompt: "Đọc nội dung đề bài LLCT và sắp xếp thành bài thuyết trình đầy đủ, có LO mapping, AI Usage và liên hệ hiện nay.",
      output: "Tạo bản nháp nội dung, cấu trúc section và gợi ý UI.",
      studentRevision: "Nhóm chọn lọc, chỉnh sửa câu chữ, đối chiếu giáo trình và bổ sung ví dụ phù hợp với phần trình bày."
    },
    {
      tool: "Codex / AI coding assistant",
      purpose: "Hỗ trợ tạo giao diện web React + TypeScript từ brief do nhóm biên soạn.",
      mainPrompt: "Build an interactive LLCT presentation website based on the provided Markdown implementation brief.",
      output: "Tạo component, CSS, data files, animation.",
      studentRevision: "Nhóm kiểm tra giao diện, chỉnh nội dung, sửa bố cục, đảm bảo thông tin đúng nguồn."
    }
  ],
  boundaries: [
    "AI không tự quyết định nội dung cuối cùng.",
    "AI không thay thế việc đọc giáo trình.",
    "Các thông tin lịch sử phải đối chiếu với giáo trình LLCT và văn kiện chính thống.",
    "Nhóm chịu trách nhiệm về tính chính xác, logic và liêm chính học thuật của sản phẩm."
  ],
  verification: [
    "Đối chiếu mốc thời gian với giáo trình.",
    "Đối chiếu khái niệm, nghị quyết, chủ trương với tài liệu học tập.",
    "Không sử dụng thông tin AI tạo ra nếu chưa kiểm chứng.",
    "Ghi rõ phần AI hỗ trợ và phần nhóm chỉnh sửa."
  ]
};
```

UI:

- Table-like cards.
- Add check icons.
- Add warning note: “AI hỗ trợ, sinh viên chịu trách nhiệm”.

---

# 12. AUDIENCE ENGAGEMENT WITHOUT GAME OR VIDEO

Do not create a game.  
Do not create video.

But add light audience hooks:

## 12.1. Opening hook

In Hero:

```txt
Nếu bạn là người lãnh đạo đất nước sau năm 1954, khi đất nước tạm thời chia cắt, bạn sẽ chọn ưu tiên điều gì: xây dựng miền Bắc, đấu tranh ở miền Nam, hay cả hai cùng lúc?
```

## 12.2. Pause question components

Create `AudiencePrompt.tsx`.

Use 3 short questions:

```ts
export const audiencePrompts = [
  {
    section: "Sau bối cảnh 1954",
    question: "Theo bạn, vì sao Đảng không chỉ tập trung vào một miền mà phải lãnh đạo đồng thời cả hai miền?"
  },
  {
    section: "Sau Nghị quyết 15",
    question: "Điều gì khiến cách mạng miền Nam phải chuyển từ giữ gìn lực lượng sang thế tiến công?"
  },
  {
    section: "Phần liên hệ hiện nay",
    question: "Bài học 'độc lập, tự chủ, sáng tạo' có ý nghĩa gì trong thời đại AI và chuyển đổi số?"
  }
];
```

UI:

- Display as “Pause & Think” card.
- No scoring, no quiz logic.
- Just audience interaction during presentation.

---

# 13. REFERENCES SECTION

Component: `ReferenceSection.tsx`

Need show source list.

Content:

```ts
export const references = [
  {
    title: "Giáo trình / tài liệu LLCT do giảng viên cung cấp",
    note: "Nguồn chính để kiểm chứng nội dung lịch sử, mốc thời gian, nghị quyết và khái niệm."
  },
  {
    title: "Văn kiện Đại hội đại biểu toàn quốc lần thứ XIII của Đảng",
    note: "Dùng cho phần liên hệ mục tiêu phát triển đất nước hiện nay."
  },
  {
    title: "Nghị quyết số 57-NQ/TW ngày 22/12/2024",
    note: "Dùng cho phần liên hệ chuyển đổi số, khoa học – công nghệ, đổi mới sáng tạo."
  },
  {
    title: "Các văn bản, nghị quyết chính thống khác theo yêu cầu môn học",
    note: "Dùng để đối chiếu thông tin do AI hỗ trợ tạo ra."
  }
];
```

---

# 14. COMPONENT DETAILS

## 14.1. `LLCTChapter2Page.tsx`

Responsibilities:

- Import all section components.
- Render the complete page.
- Include sticky nav and progress bar.
- Use section IDs for navigation.
- Initialize reveal animation.

Pseudo structure:

```tsx
export default function LLCTChapter2Page() {
  return (
    <main className="llct-page">
      <ProgressBar />
      <StickyNav />

      <HeroSection />
      <TimelineSection />
      <AntiFrenchWarSection />
      <NorthSouth1954Section />
      <PartyCongressSection />
      <NorthSouth1961Section />
      <LogicAnalysisSection />
      <LOMapSection />
      <ModernContextSection />
      <AIUsageSection />
      <ReferenceSection />
      <ConclusionSection />
    </main>
  );
}
```

---

## 14.2. `StickyNav.tsx`

Nav items:

```ts
const navItems = [
  { id: "hero", label: "Mở đầu" },
  { id: "context", label: "Bối cảnh" },
  { id: "france", label: "Chống Pháp" },
  { id: "1954-1960", label: "1954–1960" },
  { id: "1961-1965", label: "1961–1965" },
  { id: "logic", label: "Phân tích" },
  { id: "lo", label: "LO" },
  { id: "modern", label: "Liên hệ" },
  { id: "ai", label: "AI Usage" },
  { id: "references", label: "Nguồn" }
];
```

Behavior:

- Sticky top.
- Active item based on scroll if easy.
- Smooth scroll to section.

---

## 14.3. `SectionTitle.tsx`

Props:

```ts
type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};
```

---

## 14.4. `AnalysisCard.tsx`

Props:

```ts
type AnalysisCardProps = {
  title: string;
  content: string;
  badge?: string;
};
```

---

## 14.5. `SpeakerNotes.tsx`

Collapsible notes under major sections.

Props:

```ts
type SpeakerNotesProps = {
  title?: string;
  notes: string[];
};
```

UI text:

```txt
Gợi ý lời thuyết trình
```

---

# 15. SPEAKER NOTES CONTENT

Add collapsible speaker notes so group members can present.

## 15.1. Opening notes

```ts
export const openingNotes = [
  "Mở đầu bằng câu hỏi: Nếu đất nước bị chia cắt, nên ưu tiên xây dựng hay đấu tranh?",
  "Dẫn vào luận điểm chính: Đảng không chọn một trong hai, mà xác định đường lối đồng thời hai chiến lược cách mạng.",
  "Nhấn mạnh bài thuyết trình không chỉ kể sự kiện, mà phân tích logic lãnh đạo của Đảng."
];
```

## 15.2. North 1954–1960 notes

```ts
export const north1954Notes = [
  "Giải thích vì sao miền Bắc phải khôi phục kinh tế trước: chiến tranh để lại hậu quả nặng nề, đời sống nhân dân khó khăn.",
  "Nhấn mạnh nông nghiệp là trọng tâm vì nền kinh tế miền Bắc chủ yếu là nông nghiệp.",
  "Khi nói về cải cách ruộng đất, cần trình bày cả kết quả và sai lầm, thể hiện thái độ khách quan.",
  "Kết luận: miền Bắc từng bước trở thành hậu phương ổn định cho cả nước."
];
```

## 15.3. South 1954–1960 notes

```ts
export const south1954Notes = [
  "Trình bày âm mưu của Mỹ – Diệm: phá hoại Hiệp định, chia cắt lâu dài đất nước, đàn áp cách mạng.",
  "Giải thích vì sao ban đầu Đảng chủ trương đấu tranh chính trị.",
  "Phân tích ý nghĩa của Nghị quyết 15: mở đường cho kết hợp đấu tranh chính trị và vũ trang.",
  "Kết luận bằng phong trào Đồng khởi: bước ngoặt chuyển từ giữ gìn lực lượng sang thế tiến công."
];
```

## 15.4. Congress III notes

```ts
export const congressNotes = [
  "Nhấn mạnh Đại hội III là mốc hoàn chỉnh đường lối chiến lược chung.",
  "Giải thích rõ: miền Bắc quyết định nhất, miền Nam quyết định trực tiếp.",
  "Không trình bày hai miền tách rời, mà phải cho thấy mối quan hệ hậu phương – tiền tuyến."
];
```

## 15.5. South 1961–1965 notes

```ts
export const south1961Notes = [
  "Giải thích Chiến tranh đặc biệt là gì: dùng quân đội Sài Gòn, cố vấn và vũ khí Mỹ.",
  "Trình bày cách Đảng đối phó bằng ba vùng chiến lược, ba mũi giáp công.",
  "Nêu các chiến thắng tiêu biểu: Ấp Bắc, Bình Giã, Ba Gia, Đồng Xoài.",
  "Kết luận: chiến lược Chiến tranh đặc biệt bị phá sản, tạo cơ sở cho giai đoạn tiếp theo."
];
```

---

# 16. CSS LAYOUT REQUIREMENTS

Implement responsive layout.

## 16.1. Global section style

```css
.llct-section {
  min-height: 100vh;
  padding: 96px 7vw;
  position: relative;
}

.section-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
  gap: 40px;
  align-items: center;
}

@media (max-width: 900px) {
  .section-grid {
    grid-template-columns: 1fr;
  }

  .llct-section {
    padding: 72px 5vw;
  }
}
```

## 16.2. Card style

```css
.glass-card {
  background: var(--bg-card);
  border: 1px solid var(--border-soft);
  border-radius: 24px;
  padding: 28px;
  backdrop-filter: blur(16px);
}
```

## 16.3. Accent title

```css
.section-eyebrow {
  color: var(--gold-primary);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.78rem;
  font-weight: 700;
}

.section-title {
  color: var(--text-main);
  font-size: clamp(2rem, 4vw, 4.5rem);
  line-height: 1.05;
}
```

---

# 17. ACCESSIBILITY

Requirements:

- Text contrast must be readable.
- Buttons need focus states.
- Avoid tiny text.
- Use semantic HTML:
  - `main`
  - `section`
  - `nav`
  - `article`
  - `h1`, `h2`, `h3`
- Add `aria-label` for navigation.
- Do not rely only on color to convey meaning.

---

# 18. RESPONSIVE REQUIREMENTS

Must work on:

- Desktop presentation screen.
- Laptop.
- Tablet.
- Mobile.

Mobile behavior:

- Sticky nav becomes horizontal scroll.
- Cards stack vertically.
- Timeline becomes single column.
- Large headings reduce size.

---

# 19. FINAL CHECKLIST FOR CODEX

Before finishing, Codex must report:

1. Files created.
2. Files modified.
3. Route added.
4. How to run the page.
5. Any package installed.
6. Any limitation.
7. Whether build/lint passed.

---

# 20. FULL PROMPT TO SEND TO CODEX

Copy this prompt into Codex:

```txt
Build an interactive React + TypeScript presentation page for a Vietnamese LLCT topic.

Topic:
“Chương 2: Đảng lãnh đạo hai cuộc kháng chiến, hoàn thành giải phóng dân tộc, thống nhất đất nước (1945–1975)”, focusing on:
1) Historical meaning and Party leadership experience in the resistance war against French colonialism and U.S. intervention.
2) Party leadership over the two revolutionary tasks in North and South Vietnam from 1954 to 1965.
3) North Vietnam: economic recovery, socialist transformation, socialist construction, and support for the South.
4) South Vietnam: from preserving forces to offensive position, Dong Khoi, and defeating the U.S. “Special War” strategy.

Important requirements:
- This must be a web presentation, not a normal article.
- The website is the center of the presentation.
- No video and no game.
- Add interactive/visual presentation elements: timeline, comparison cards, logic analysis cards, LO mapping, modern context section, AI Usage section, references section, progress bar, sticky navigation, scroll reveal animations, hover effects.
- Content must be separated into data files so I can easily edit it later.
- Use Vietnamese content.
- Keep the current project architecture and naming conventions.
- Do not delete old files.
- Do not rename unrelated files.
- If a route system already exists, register route `/llct-chapter-2`.
- If no route system exists, create/export the page clearly so I can mount it manually.

Suggested folder:
src/features/LLCTChapter2/
  index.ts
  LLCTChapter2Page.tsx
  LLCTChapter2Page.css
  data/
    heroContent.ts
    timelineData.ts
    sectionContent.ts
    loMapping.ts
    aiUsage.ts
    modernContext.ts
    references.ts
  components/
    HeroSection.tsx
    StickyNav.tsx
    ProgressBar.tsx
    SectionTitle.tsx
    TimelineSection.tsx
    TwoRegionMap.tsx
    AnalysisCard.tsx
    EvidenceCard.tsx
    LOMapSection.tsx
    ModernContextSection.tsx
    AIUsageSection.tsx
    ConclusionSection.tsx
    SpeakerNotes.tsx
    ReferenceSection.tsx

Theme:
Historic – Modern – Academic.
Use dark background, deep red, gold accents, glass cards, archive-paper feeling, large readable headings.

CSS variables:
--bg-main: #0f1117;
--bg-section: #161922;
--bg-card: rgba(255, 255, 255, 0.06);
--text-main: #f5efe6;
--text-muted: #c9beb0;
--red-primary: #b91c1c;
--red-glow: #ef4444;
--gold-primary: #f5c542;
--gold-soft: #f8e2a1;
--border-soft: rgba(255, 255, 255, 0.12);

Sections to implement:
1. Hero – “Hai miền – Một mục tiêu”
2. Timeline – 1945, 1946–1954, 7/1954, 1959–1960, 9/1960, 1961–1965
3. Historical meaning and experience of the anti-French resistance
4. North Vietnam 1954–1960
5. South Vietnam 1954–1960
6. Party Congress III and two revolutionary strategies
7. North Vietnam 1961–1965
8. South Vietnam 1961–1965
9. Logic analysis – from event to leadership thinking
10. LO mapping
11. Modern context – connect historical lessons to present Vietnam: independent development, national unity, science/technology, innovation, digital transformation, responsible AI use.
12. AI Usage & Academic Integrity
13. References
14. Conclusion

LOs:
LO1 – Identify the historical context.
LO2 – Analyze the Party’s leadership line.
LO3 – Evaluate historical meaning and leadership experience.
LO4 – Connect historical lessons with current national development context.

AI Usage section must include:
- Tools used: ChatGPT and Codex / AI coding assistant.
- Purpose of each tool.
- Main prompt.
- AI output.
- Student revision.
- Written commitment that AI did not replace the group’s work.
- Clear distinction between AI output and student-edited content.
- Verification against official sources and LLCT textbook.

Modern context section must mention:
- Lessons about independence and self-reliance in development.
- Combining national strength with the strength of the times.
- Building a strong foundation: institutions, education, science and technology, digital infrastructure, human resources.
- National unity and social consensus.
- Responsible AI use in learning.

Add collapsible speaker notes under major sections.
Add “Pause & Think” audience prompt cards, but do not implement a game or quiz.

Animation:
- Scroll reveal with IntersectionObserver or CSS.
- Hover lift on cards.
- Top progress bar.
- Smooth scroll navigation.
- Respect prefers-reduced-motion.

Accessibility:
- Use semantic HTML.
- Use readable contrast.
- Add aria labels for nav/buttons.
- Make it responsive.

After implementation, report:
- Created files
- Modified files
- Route/import changes
- How to run
- Build/lint result
```

---

# 21. CONTENT QUALITY CHECKLIST

Before presenting, check:

- Does the page explain “why” and “how”, not only “what happened”?
- Are North and South shown as connected?
- Is the role of the Party shown through decisions, strategy, and leadership logic?
- Is the LO mapping visible?
- Is AI Usage transparent?
- Are sources listed?
- Is the modern context section connected logically, not forced?
- Is the page easy to present on screen?
- Can each team member speak from one section?
- Is there enough visual hierarchy for the audience to follow?

---

# 22. SUGGESTED GROUP PRESENTATION FLOW

## Member 1
- Hero
- Context timeline
- Anti-French War meaning and lessons

## Member 2
- North Vietnam 1954–1960
- South Vietnam 1954–1960

## Member 3
- Party Congress III
- Two revolutionary strategies
- North Vietnam 1961–1965

## Member 4
- South Vietnam 1961–1965
- Logic analysis
- LO mapping

## Member 5
- Modern context
- AI Usage
- References
- Conclusion

---

# 23. SHORT CONCLUSION TEXT FOR THE WEBSITE

```txt
Giai đoạn 1954–1965 cho thấy tư duy lãnh đạo độc lập, tự chủ và sáng tạo của Đảng: xác định đúng nhiệm vụ từng miền, kết hợp hậu phương miền Bắc với tiền tuyến miền Nam, kết hợp sức mạnh dân tộc với sức mạnh thời đại. Đường lối tiến hành đồng thời hai chiến lược cách mạng đã tạo nền tảng để cách mạng Việt Nam tiếp tục phát triển, tiến tới giải phóng miền Nam, thống nhất đất nước năm 1975. Bài học đó vẫn có ý nghĩa trong hiện tại: muốn phát triển bền vững, đất nước cần nền tảng vững chắc, tinh thần đoàn kết, năng lực tự chủ và khả năng vận dụng sáng tạo tri thức, công nghệ mới.
```
