# Bibinii Farms UTM Tracking System

A comprehensive UTM (Urchin Tracking Module) parameter tracking system for monitoring marketing campaign performance and traffic sources.

## 🎯 What is UTM Tracking?

UTM parameters are tags added to URLs that help track the effectiveness of marketing campaigns. They tell you:
- **Where** traffic is coming from (source)
- **How** they found you (medium)
- **Which campaign** brought them (campaign)
- **What keywords** they used (term)
- **Which specific content** they clicked (content)

## 🚀 Features

### ✅ Automatic Tracking
- **Auto-capture**: Automatically detects and stores UTM parameters from incoming traffic
- **Traffic source detection**: Identifies organic traffic sources (Google, Facebook, etc.)
- **Session persistence**: Stores UTM data for 30 days in localStorage
- **Google Analytics integration**: Sends UTM events to GA4

### ✅ Pre-built Campaign Links
- **Social media campaigns**: Facebook, Instagram, Twitter, WhatsApp
- **Email marketing**: Newsletters, promotions, welcome series
- **Google Ads**: Search, display, shopping campaigns
- **Influencer marketing**: Track individual influencer performance
- **Offline marketing**: QR codes, print ads, radio
- **Partnership marketing**: Affiliate and referral tracking

### ✅ Analytics Dashboard
- **Real-time tracking**: View current session UTM parameters
- **Traffic source breakdown**: See top performing sources
- **Campaign performance**: Track visits and conversions
- **Local history**: View recent traffic sources

## 📁 File Structure

```
app/
├── utils/
│   ├── utm.ts              # Core UTM utilities
│   └── utm-links.ts        # Pre-built marketing links
├── components/
│   ├── UTMTracker.tsx      # Auto-tracking component
│   └── UTMDashboard.tsx    # Analytics dashboard
└── api/
    └── analytics/
        └── utm/
            └── route.ts    # Analytics API endpoint
```

## 🔧 Implementation

### 1. UTM Tracker (Already Active)
The `UTMTracker` component is automatically included in your layout and tracks:
- UTM parameters from URLs
- Traffic sources from referrers
- User session data
- Sends events to Google Analytics

### 2. Using Pre-built Campaign Links

```typescript
import { MarketingLinks, CampaignNames } from '@/app/utils/utm-links';

// Social media campaigns
const facebookPost = MarketingLinks.social.facebook.organicPost(CampaignNames.FRESH_EGGS_LAUNCH);
// Result: https://bibiniifarms.com?utm_source=facebook&utm_medium=social&utm_campaign=fresh_eggs_launch&utm_content=organic_post

// Email campaigns
const newsletter = MarketingLinks.email.newsletter(CampaignNames.SPRING_FRESH);
// Result: https://bibiniifarms.com?utm_source=newsletter&utm_medium=email&utm_campaign=spring_fresh_2024&utm_content=newsletter

// Google Ads
const searchAd = MarketingLinks.googleAds.search('fresh_eggs_ghana', 'fresh_eggs', 'fresh eggs ghana');
// Result: https://bibiniifarms.com?utm_source=google&utm_medium=cpc&utm_campaign=fresh_eggs_ghana&utm_content=fresh_eggs&utm_term=fresh%20eggs%20ghana
```

### 3. Quick Links for Common Use Cases

```typescript
import { QuickLinks } from '@/app/utils/utm-links';

// Instagram bio link
const instagramBio = QuickLinks.instagramBio();

// Email signature
const emailSignature = QuickLinks.emailSignature();

// Business card QR code
const businessCard = QuickLinks.businessCard();
```

## 📊 Campaign Examples

### Social Media Campaigns

**Facebook Product Launch:**
```
https://bibiniifarms.com?utm_source=facebook&utm_medium=social&utm_campaign=fresh_eggs_launch&utm_content=organic_post
```

**Instagram Story:**
```
https://bibiniifarms.com?utm_source=instagram&utm_medium=social&utm_campaign=brand_awareness&utm_content=story
```

### Email Marketing

**Newsletter:**
```
https://bibiniifarms.com?utm_source=newsletter&utm_medium=email&utm_campaign=spring_fresh_2024&utm_content=newsletter
```

**Welcome Email Series:**
```
https://bibiniifarms.com?utm_source=email&utm_medium=email&utm_campaign=welcome_series&utm_content=welcome_email_1
```

### Google Ads

**Search Campaign:**
```
https://bibiniifarms.com?utm_source=google&utm_medium=cpc&utm_campaign=fresh_eggs_ghana&utm_content=fresh_eggs&utm_term=fresh%20eggs%20ghana
```

### Influencer Marketing

**Influencer Post:**
```
https://bibiniifarms.com?utm_source=influencer&utm_medium=social&utm_campaign=brand_awareness&utm_content=john_doe
```

### Offline Marketing

**QR Code on Flyer:**
```
https://bibiniifarms.com?utm_source=qr_code&utm_medium=offline&utm_campaign=farmers_market&utm_content=accra_market
```

## 📈 Tracking Best Practices

### 1. Consistent Naming Convention
- Use lowercase letters
- Replace spaces with underscores
- Be descriptive but concise
- Use consistent campaign names across channels

### 2. UTM Parameter Guidelines

**utm_source** (Required)
- `facebook`, `instagram`, `twitter`, `google`, `newsletter`, `influencer`

**utm_medium** (Required)
- `social`, `email`, `cpc`, `organic`, `referral`, `offline`

**utm_campaign** (Required)
- `fresh_eggs_launch`, `brand_awareness`, `spring_fresh_2024`

**utm_content** (Optional)
- `organic_post`, `story`, `ad_variant_a`, `header_banner`

**utm_term** (Optional - mainly for paid search)
- `fresh eggs ghana`, `organic eggs accra`

### 3. Campaign Naming Examples

```typescript
// Good campaign names
CampaignNames.FRESH_EGGS_LAUNCH = 'fresh_eggs_launch'
CampaignNames.SPRING_FRESH = 'spring_fresh_2024'
CampaignNames.BRAND_AWARENESS = 'brand_awareness'

// Avoid
'Fresh Eggs Launch!'  // Spaces and special characters
'campaign1'           // Not descriptive
'FreshEggsLaunch'     // Mixed case
```

## 🔍 Analytics & Reporting

### View UTM Data
1. **Google Analytics**: Check Acquisition > Campaigns
2. **Local Dashboard**: Use `UTMDashboard` component
3. **Browser Console**: UTM data is logged for debugging
4. **localStorage**: Check `bibinii_utm_params` and `bibinii_traffic_sources`

### API Endpoint
```
GET /api/analytics/utm?days=7&source=facebook&campaign=fresh_eggs_launch
```

## 🛠️ Customization

### Add New Campaign Types
```typescript
// In utm-links.ts
export const MarketingLinks = {
  // Add new campaign type
  podcast: {
    sponsorship: (podcastName: string, campaign: string) => buildUTMUrl(BASE_URL, {
      utm_source: 'podcast',
      utm_medium: 'audio',
      utm_campaign: campaign,
      utm_content: podcastName.toLowerCase().replace(/\s+/g, '_')
    })
  }
};
```

### Custom Analytics Integration
```typescript
// In UTMTracker.tsx, uncomment and modify:
await fetch('/api/analytics/utm', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(analyticsData)
});
```

## 🚨 Important Notes

1. **Privacy Compliance**: UTM tracking respects user privacy and doesn't collect personal information
2. **Data Retention**: UTM parameters are stored locally for 30 days
3. **Google Analytics**: UTM events are automatically sent to GA4
4. **Performance**: Minimal impact on page load times
5. **Fallback**: System gracefully handles missing UTM parameters

## 📞 Support

For questions about UTM tracking implementation:
1. Check browser console for UTM tracking logs
2. Verify UTM parameters in localStorage
3. Test with different campaign URLs
4. Monitor Google Analytics for UTM events

---

**Ready to track your marketing success!** 🎯📊
