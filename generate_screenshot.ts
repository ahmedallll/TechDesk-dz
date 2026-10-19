import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function generateScreenshot1() {
  const width = 1280;
  const height = 720;

  const svgContent = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Readex+Pro:wght@400;500;600;700&amp;family=Plus+Jakarta+Sans:wght@500;600;700&amp;display=swap');
      
      .text-arabic { font-family: 'Readex Pro', 'Segoe UI', sans-serif; direction: rtl; }
      .text-latin { font-family: 'Plus Jakarta Sans', system-ui, sans-serif; }
      .mono { font-family: 'Consolas', 'Courier New', monospace; }
    </style>
    
    <linearGradient id="windowBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0F0A21" />
      <stop offset="100%" stop-color="#181033" />
    </linearGradient>

    <linearGradient id="activeMenuGradient" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#7C3AED" />
      <stop offset="100%" stop-color="#6D28D9" />
    </linearGradient>

    <linearGradient id="payBtnGradient" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#6D28D9" />
      <stop offset="100%" stop-color="#4C1D95" />
    </linearGradient>

    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#000000" flood-opacity="0.25"/>
    </filter>
  </defs>

  <!-- Outer Window Frame -->
  <rect width="${width}" height="${height}" rx="12" fill="url(#windowBg)" />

  <!-- Window Header / Titlebar -->
  <g id="titlebar">
    <rect width="${width}" height="42" rx="12" fill="#130E2E" />
    <rect y="32" width="${width}" height="10" fill="#130E2E" />

    <!-- Window Controls (Left side) -->
    <g transform="translate(18, 14)">
      <circle cx="0" cy="0" r="6" fill="#EF4444" opacity="0.85" />
      <circle cx="18" cy="0" r="6" fill="#F59E0B" opacity="0.85" />
      <circle cx="36" cy="0" r="6" fill="#10B981" opacity="0.85" />
    </g>

    <!-- Center Badges and Title -->
    <!-- Local Database Badge -->
    <rect x="230" y="8" width="170" height="26" rx="13" fill="#064E3B" opacity="0.9"/>
    <circle cx="384" cy="21" r="3.5" fill="#34D399" />
    <text x="372" y="25" font-size="11" font-weight="600" fill="#A7F3D0" text-anchor="end" class="text-arabic">قاعدة بيانات محلية متصلة</text>

    <!-- Title Text -->
    <text x="640" y="26" font-size="13" font-weight="600" fill="#E9D5FF" text-anchor="middle" class="text-arabic">
      TechDesk DZ v1.0.0 — [النسخة التجريبية : متبقي 72 ساعة]
    </text>

    <!-- App Logo Icon Badge (Right) -->
    <rect x="1226" y="8" width="26" height="26" rx="6" fill="#6D28D9" />
    <text x="1239" y="25" font-size="11" font-weight="700" fill="#FFFFFF" text-anchor="middle" class="text-latin">TD</text>
  </g>

  <!-- Main Window Body -->
  <g id="body" transform="translate(0, 42)">
    <!-- Right Sidebar (RTL) -->
    <rect x="980" y="0" width="300" height="678" fill="#130E2E" />

    <!-- Store Profile Box -->
    <g transform="translate(996, 16)">
      <rect width="268" height="70" rx="10" fill="#1C153B" stroke="#2E235C" stroke-width="1" />
      
      <!-- Store Info -->
      <circle cx="248" cy="26" r="4" fill="#10B981" />
      <text x="238" y="28" font-size="11" font-weight="600" fill="#9CA3AF" text-anchor="end" class="text-arabic">المحل التجاري</text>
      <text x="252" y="48" font-size="13" font-weight="700" fill="#FFFFFF" text-anchor="end" class="text-latin">TECH COMPUTER &amp; PHONE</text>
      <text x="252" y="62" font-size="10" font-weight="500" fill="#A78BFA" text-anchor="end" class="text-arabic">المستخدم: المدير</text>
    </g>

    <!-- Sidebar Menu Items -->
    <g transform="translate(996, 104)">
      <!-- Item 1: Active Highlighted Menu Item - Point of Sale -->
      <rect width="268" height="48" rx="10" fill="url(#activeMenuGradient)" />
      <!-- Shopping Cart Icon -->
      <path d="M242 22 h-10 l-3 12 h16 l-3 -12 z M232 37 a1.5 1.5 0 1 0 0 3 a1.5 1.5 0 1 0 0 -3 M243 37 a1.5 1.5 0 1 0 0 3 a1.5 1.5 0 1 0 0 -3" stroke="#FFFFFF" stroke-width="2" fill="none" />
      <text x="220" y="30" font-size="14" font-weight="700" fill="#FFFFFF" text-anchor="end" class="text-arabic">نقطة البيع والصندوق</text>

      <!-- Item 2: Inventory -->
      <g transform="translate(0, 56)">
        <rect width="268" height="44" rx="8" fill="transparent" />
        <path d="M244 18 l-6 -3 l-6 3 l6 3 z M232 21 v6 l6 3 v-6 z M244 21 v6 l-6 3 v-6 z" stroke="#A78BFA" stroke-width="1.8" fill="none" />
        <text x="220" y="27" font-size="13" font-weight="600" fill="#C4B5FD" text-anchor="end" class="text-arabic">المخزون والسلع</text>
      </g>

      <!-- Item 3: After Sales / Repairs -->
      <g transform="translate(0, 106)">
        <rect width="268" height="44" rx="8" fill="transparent" />
        <path d="M236 16 a4 4 0 0 1 6 6 l-8 8 l-4 -1 l1 -4 z" stroke="#A78BFA" stroke-width="1.8" fill="none" />
        <text x="220" y="27" font-size="13" font-weight="600" fill="#C4B5FD" text-anchor="end" class="text-arabic">خدمة ما بعد البيع</text>
      </g>

      <!-- Item 4: Dashboard -->
      <g transform="translate(0, 156)">
        <rect width="268" height="44" rx="8" fill="transparent" />
        <path d="M234 28 v-6 M239 28 v-12 M244 28 v-8" stroke="#A78BFA" stroke-width="2" stroke-linecap="round" />
        <text x="220" y="27" font-size="13" font-weight="600" fill="#C4B5FD" text-anchor="end" class="text-arabic">لوحة التحكم</text>
      </g>
    </g>

    <!-- Main Central Panel (White / Light Surface) -->
    <rect x="0" y="0" width="980" height="678" fill="#F8F6FC" />

    <!-- Inner POS Container Card -->
    <g transform="translate(16, 16)">
      <rect width="948" height="646" rx="12" fill="#FFFFFF" stroke="#E6DFF5" stroke-width="1" />

      <!-- POS Top Action Bar -->
      <g transform="translate(20, 20)">
        <!-- Ticket Badge -->
        <rect x="0" y="0" width="150" height="34" rx="8" fill="#F3E8FF" />
        <text x="75" y="22" font-size="13" font-weight="700" fill="#7C3AED" text-anchor="middle" class="text-latin">Ticket #2026-0842</text>

        <!-- Customer Badge -->
        <rect x="162" y="0" width="110" height="34" rx="8" fill="#F5F3FF" stroke="#DDD6FE" stroke-width="1" />
        <text x="217" y="22" font-size="12" font-weight="600" fill="#5B21B6" text-anchor="middle" class="text-arabic">زبون عابر</text>

        <!-- Barcode Scanner Active -->
        <rect x="282" y="0" width="150" height="34" rx="8" fill="#F5F3FF" stroke="#DDD6FE" stroke-width="1" />
        <text x="357" y="22" font-size="12" font-weight="600" fill="#6D28D9" text-anchor="middle" class="text-arabic">Douchette active |||||</text>

        <!-- Search Input -->
        <rect x="442" y="0" width="466" height="34" rx="8" fill="#FAF5FF" stroke="#E9D5FF" stroke-width="1" />
        <text x="888" y="22" font-size="13" font-weight="500" fill="#A855F7" text-anchor="end" class="text-arabic">بحث برقم أو رمز الباركود...</text>
      </g>

      <!-- Table Header -->
      <g transform="translate(20, 74)">
        <rect width="908" height="36" rx="6" fill="#F3E8FF" />
        <text x="880" y="23" font-size="12" font-weight="700" fill="#4C1D95" text-anchor="end" class="text-arabic">المرجع والمنتج</text>
        <text x="400" y="23" font-size="12" font-weight="700" fill="#4C1D95" text-anchor="middle" class="text-arabic">الكمية</text>
        <text x="240" y="23" font-size="12" font-weight="700" fill="#4C1D95" text-anchor="middle" class="text-arabic">سعر الوحدة</text>
        <text x="80" y="23" font-size="12" font-weight="700" fill="#4C1D95" text-anchor="middle" class="text-arabic">المجموع</text>
      </g>

      <!-- Table Row 1 -->
      <g transform="translate(20, 118)">
        <rect width="908" height="68" rx="8" fill="#FFFFFF" stroke="#F3E8FF" stroke-width="1" />
        
        <!-- Product Info -->
        <text x="880" y="28" font-size="13" font-weight="700" fill="#1E1B4B" text-anchor="end" class="text-latin">SSD Kingston NV2 500GB NVMe M.2</text>
        <text x="880" y="48" font-size="11" font-weight="500" fill="#8B5CF6" text-anchor="end" class="text-latin">SN: 73928172901 • Stock: 14</text>

        <!-- Qty -->
        <rect x="380" y="18" width="40" height="30" rx="6" fill="#F3E8FF" />
        <text x="400" y="38" font-size="13" font-weight="700" fill="#5B21B6" text-anchor="middle" class="text-latin">1</text>

        <!-- Unit Price -->
        <text x="240" y="38" font-size="13" font-weight="600" fill="#374151" text-anchor="middle" class="text-latin">5 800 DA</text>

        <!-- Subtotal -->
        <text x="80" y="38" font-size="14" font-weight="700" fill="#6D28D9" text-anchor="middle" class="text-latin">5 800 DA</text>
      </g>

      <!-- Table Row 2 -->
      <g transform="translate(20, 194)">
        <rect width="908" height="68" rx="8" fill="#FFFFFF" stroke="#F3E8FF" stroke-width="1" />
        
        <text x="880" y="28" font-size="13" font-weight="700" fill="#1E1B4B" text-anchor="end" class="text-latin">Écran LCD iPhone 11 OLED Original</text>
        <text x="880" y="48" font-size="11" font-weight="500" fill="#8B5CF6" text-anchor="end" class="text-latin">REF: DISP-IP11-BK • Stock: 4</text>

        <rect x="380" y="18" width="40" height="30" rx="6" fill="#F3E8FF" />
        <text x="400" y="38" font-size="13" font-weight="700" fill="#5B21B6" text-anchor="middle" class="text-latin">1</text>

        <text x="240" y="38" font-size="13" font-weight="600" fill="#374151" text-anchor="middle" class="text-latin">7 200 DA</text>

        <text x="80" y="38" font-size="14" font-weight="700" fill="#6D28D9" text-anchor="middle" class="text-latin">7 200 DA</text>
      </g>

      <!-- Table Row 3 -->
      <g transform="translate(20, 270)">
        <rect width="908" height="68" rx="8" fill="#FFFFFF" stroke="#F3E8FF" stroke-width="1" />
        
        <text x="880" y="28" font-size="13" font-weight="700" fill="#1E1B4B" text-anchor="end" class="text-latin">Pâte Thermique Arctic MX-4 (4g)</text>
        <text x="880" y="48" font-size="11" font-weight="500" fill="#8B5CF6" text-anchor="end" class="text-latin">REF: ART-MX4-4G • Stock: 22</text>

        <rect x="380" y="18" width="40" height="30" rx="6" fill="#F3E8FF" />
        <text x="400" y="38" font-size="13" font-weight="700" fill="#5B21B6" text-anchor="middle" class="text-latin">2</text>

        <text x="240" y="38" font-size="13" font-weight="600" fill="#374151" text-anchor="middle" class="text-latin">950 DA</text>

        <text x="80" y="38" font-size="14" font-weight="700" fill="#6D28D9" text-anchor="middle" class="text-latin">1 900 DA</text>
      </g>

      <!-- Table Row 4 -->
      <g transform="translate(20, 346)">
        <rect width="908" height="68" rx="8" fill="#FFFFFF" stroke="#F3E8FF" stroke-width="1" />
        
        <text x="880" y="28" font-size="13" font-weight="700" fill="#1E1B4B" text-anchor="end" class="text-latin">Câble Tressé USB-C vers Lightning 1.2m</text>
        <text x="880" y="48" font-size="11" font-weight="500" fill="#8B5CF6" text-anchor="end" class="text-latin">REF: CAB-USBC-LT • Stock: 31</text>

        <rect x="380" y="18" width="40" height="30" rx="6" fill="#F3E8FF" />
        <text x="400" y="38" font-size="13" font-weight="700" fill="#5B21B6" text-anchor="middle" class="text-latin">1</text>

        <text x="240" y="38" font-size="13" font-weight="600" fill="#374151" text-anchor="middle" class="text-latin">1 100 DA</text>

        <text x="80" y="38" font-size="14" font-weight="700" fill="#6D28D9" text-anchor="middle" class="text-latin">1 100 DA</text>
      </g>

      <!-- Bottom Checkout Totals Bar -->
      <g transform="translate(20, 440)">
        <rect width="908" height="170" rx="12" fill="#130E2E" />

        <!-- Subtotal / Details -->
        <g transform="translate(860, 40)">
          <text x="0" y="0" font-size="14" font-weight="600" fill="#C4B5FD" text-anchor="end" class="text-arabic">المجموع الفرعي :</text>
          <text x="-160" y="0" font-size="16" font-weight="700" fill="#FFFFFF" text-anchor="end" class="text-latin">16 000 DA</text>
        </g>

        <!-- Net Amount Due -->
        <g transform="translate(860, 95)">
          <text x="0" y="0" font-size="16" font-weight="700" fill="#A78BFA" text-anchor="end" class="text-arabic">الصافي للدفع :</text>
          <text x="-160" y="4" font-size="28" font-weight="800" fill="#10B981" text-anchor="end" class="text-latin">16 000 DA</text>
        </g>

        <!-- Pay Button -->
        <g transform="translate(40, 30)">
          <rect width="320" height="110" rx="12" fill="url(#payBtnGradient)" />
          <text x="160" y="52" font-size="20" font-weight="800" fill="#FFFFFF" text-anchor="middle" class="text-arabic">تأكيد وتحصيل المبيعات</text>
          <text x="160" y="80" font-size="14" font-weight="600" fill="#DDD6FE" text-anchor="middle" class="text-arabic">طباعة التذكرة وتسجيل الحركة</text>
        </g>
      </g>
    </g>
  </g>
</svg>
`;

  const publicPath = path.resolve('public/screenshots/1.webp');
  const distPath = path.resolve('dist/screenshots/1.webp');

  const webpBuffer = await sharp(Buffer.from(svgContent))
    .webp({ quality: 95 })
    .toBuffer();

  fs.writeFileSync(publicPath, webpBuffer);
  console.log('Saved to:', publicPath);

  if (fs.existsSync('dist/screenshots')) {
    fs.writeFileSync(distPath, webpBuffer);
    console.log('Saved to:', distPath);
  }
}

generateScreenshot1().catch(console.error);
