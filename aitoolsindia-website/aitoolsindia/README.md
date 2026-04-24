# AIToolsIndia — Complete Website

## Pages Included
- index.html       → Homepage
- reviews.html     → All reviews with filter tabs
- article.html     → Sample article/review page (with sidebar ads)
- compare.html     → AI tools comparison page
- blog.html        → Blog listing with sidebar
- about.html       → About, privacy policy, affiliate disclosure, contact
- css/style.css    → All shared styles
- js/main.js       → Shared JS + AdSense setup

---

## How to Connect Google AdSense

### Step 1 — Apply for AdSense
1. Go to https://adsense.google.com
2. Sign in with your Google account
3. Click "Get Started" and enter your website URL
4. They will review your site (takes 1–14 days)
5. Your site needs: real content, privacy policy, about page ✅ (all included)

### Step 2 — Get Your Publisher ID
After approval, go to AdSense Dashboard → Account → Account information
You'll see: ca-pub-XXXXXXXXXXXXXXXX

### Step 3 — Add Your Publisher ID
Open js/main.js and change line 6:
  const ADSENSE_PUB_ID = 'ca-pub-XXXXXXXXXXXXXXXX';
Replace with your real ID:
  const ADSENSE_PUB_ID = 'ca-pub-1234567890123456';

### Step 4 — Enable Auto Ads (Easiest)
In AdSense dashboard → Ads → By site → Get code
Copy the auto ads script and paste in <head> of each HTML file.
Auto ads will automatically place ads in the best positions.

### Step 5 — Manual Ad Slots (Optional, Higher Earning)
In AdSense → Ads → By ad unit → Create new ad unit
Get the Ad Slot ID (e.g. 1234567890)

Then in each HTML file, uncomment and update:
  renderAd('ad-home-top', '1234567890');

The renderAd() function in main.js handles everything.

---

## How to Deploy FREE on Vercel

1. Create account at https://vercel.com (free)
2. Install Vercel CLI: npm i -g vercel
3. Run in this folder: vercel
4. Follow the prompts — site will be live in 2 minutes
5. You get a free .vercel.app domain instantly

## Custom Domain (Optional — ₹800/year)
Buy domain at Namecheap or GoDaddy
In Vercel dashboard → Domains → Add your domain
Update nameservers at your registrar

---

## Affiliate Links Setup
Replace all href="#" in tool cards with your real affiliate links.
Each program's affiliate dashboard gives you unique links.

Affiliate Programs to Join (all free):
- Jasper: https://jasper.ai/affiliate
- SEMrush: https://www.semrush.com/berush/
- Writesonic: https://writesonic.com/affiliate
- Canva: https://www.canva.com/affiliates/
- Amazon India: https://affiliate-program.amazon.in

---

## AdSense Ad Placement Map

| Page        | Ad IDs                                    |
|-------------|-------------------------------------------|
| index.html  | ad-home-top, ad-home-mid, ad-home-bottom  |
| reviews.html| ad-reviews-top, ad-reviews-mid            |
| article.html| ad-article-top, ad-article-mid, ad-article-bottom, ad-sidebar, ad-sidebar-2 |
| compare.html| ad-compare-top, ad-compare-bottom         |
| blog.html   | ad-blog-top, ad-blog-mid, ad-blog-sidebar |
| about.html  | ad-about-top, ad-about-sidebar            |

---

Good luck! Stay consistent and you'll see results in 4-6 months. 💪
