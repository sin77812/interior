# Project: ARC Studio – 건축/인테리어 홈페이지 리디자인

## 🎨 Design Concept
- **Core Message:** From Blueprint to Reality (도면에서 현실로 이어지는 공간)
- **Target:** 건축/인테리어 전문 스튜디오, 기업 클라이언트, 프리미엄 리모델링 고객
- **Tone & Mood:** 고급스럽고 심플한 미니멀리즘, 아트 갤러리 같은 감각
- **Keywords:** White, Light, Space, Precision, Luxury, Simplicity

---

## 🖌️ Visual Identity
- **Background:** White / Light Gray (#fafafa, #f5f5f5)
- **Typography:** 
  - Headline → Sans-serif (Neue Haas Grotesk, Helvetica Neue, Pretendard)
  - Body → Clean, readable, light weight
  - Numbers → Condensed style (도면 좌표 느낌)
- **Color Palette:** 
  - Primary: Black (#111), Charcoal (#222)
  - Accent: Subtle Gold/Beige (#c8b686, #d1c7b2) for highlights
- **Layout:** Wide spacing, grid-based alignment, photographs treated like artworks
- **Imagery:** 
  - Left: Blueprint / technical drawing
  - Right: Realized interior photography
  - Hover: Blueprint → Completed space transition

---

## 🏗️ Page Structure
1. **Hero**
   - Left: Blueprint animation (SVG line-drawing or subtle motion)
   - Right: Interior photo
   - Center: Main tagline
   - CTA: [프로젝트 보기] [문의하기]

2. **About**
   - Minimal philosophy section with 2–3 lines only
   - Grid lines as background separators

3. **Projects**
   - 3-column grid
   - Hover: Switch from blueprint → real photo
   - Caption: Name / Year / Location

4. **Process**
   - 4 Steps: 상담 → 설계 → 시공 → 완공
   - Each step as a box, lines connect to form flow diagram
   - Numbers styled like architectural coordinates

5. **Contact**
   - Clean form
   - Copy: “도면을 공유해주세요. 현실로 만들어드립니다.”

---

## ✨ Interaction Guidelines
- **Line Animation:** Use SVG stroke-dasharray for blueprint drawing effect
- **Hover Transitions:** Smooth fade/slide (0.5s ease-in-out)
- **Scroll Animations:** GSAP/ScrollTrigger (optional), reduced-motion fallback
- **Page Transitions:** White overlay with black line grid → fade to new content
- **Responsiveness:** Mobile → vertical stacking, blueprint above photo

---

## 🔧 Technical Guidelines
- **Framework:** HTML/CSS/JS (optionally Next.js + Framer Motion)
- **Libraries:** GSAP for scroll/line animation if needed
- **Accessibility:** Consider prefers-reduced-motion, semantic HTML5
- **SEO:** Use `<figcaption>` for project metadata (name, year, location)
- **Performance:** Lazy load images, optimize for Core Web Vitals

---

## 🎯 Goal
- Deliver a **premium architectural website template** that feels:
  - Clean & minimal like a gallery
  - Technically precise like a blueprint
  - Emotionally powerful like a finished interior


## important
- 이모지는 최대한 지양하며, 최대한 멋진 디자인으로 보이게끔. 
- ai가 한 것 같지 않은 분위기, 텍스트 필요