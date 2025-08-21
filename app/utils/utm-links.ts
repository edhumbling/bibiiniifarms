// UTM Link Generator for Marketing Campaigns
import { buildUTMUrl, UTMParams } from './utm';

const BASE_URL = 'https://bibiniifarms.com';

// Pre-built UTM links for common marketing campaigns
export const MarketingLinks = {
  // Social Media Campaigns
  social: {
    facebook: {
      // Facebook organic posts
      organicPost: (campaign: string) => buildUTMUrl(BASE_URL, {
        utm_source: 'facebook',
        utm_medium: 'social',
        utm_campaign: campaign,
        utm_content: 'organic_post'
      }),
      
      // Facebook ads
      ad: (campaign: string, adSet?: string) => buildUTMUrl(BASE_URL, {
        utm_source: 'facebook',
        utm_medium: 'cpc',
        utm_campaign: campaign,
        utm_content: adSet || 'facebook_ad'
      }),
      
      // Facebook stories
      story: (campaign: string) => buildUTMUrl(BASE_URL, {
        utm_source: 'facebook',
        utm_medium: 'social',
        utm_campaign: campaign,
        utm_content: 'story'
      })
    },
    
    instagram: {
      // Instagram organic posts
      post: (campaign: string) => buildUTMUrl(BASE_URL, {
        utm_source: 'instagram',
        utm_medium: 'social',
        utm_campaign: campaign,
        utm_content: 'post'
      }),
      
      // Instagram stories
      story: (campaign: string) => buildUTMUrl(BASE_URL, {
        utm_source: 'instagram',
        utm_medium: 'social',
        utm_campaign: campaign,
        utm_content: 'story'
      }),
      
      // Instagram bio link
      bio: (campaign: string) => buildUTMUrl(BASE_URL, {
        utm_source: 'instagram',
        utm_medium: 'social',
        utm_campaign: campaign,
        utm_content: 'bio_link'
      })
    },
    
    twitter: {
      // Twitter organic tweets
      tweet: (campaign: string) => buildUTMUrl(BASE_URL, {
        utm_source: 'twitter',
        utm_medium: 'social',
        utm_campaign: campaign,
        utm_content: 'tweet'
      }),
      
      // Twitter ads
      ad: (campaign: string) => buildUTMUrl(BASE_URL, {
        utm_source: 'twitter',
        utm_medium: 'cpc',
        utm_campaign: campaign,
        utm_content: 'twitter_ad'
      })
    },
    
    whatsapp: {
      // WhatsApp status
      status: (campaign: string) => buildUTMUrl(BASE_URL, {
        utm_source: 'whatsapp',
        utm_medium: 'social',
        utm_campaign: campaign,
        utm_content: 'status'
      }),
      
      // WhatsApp direct message
      message: (campaign: string) => buildUTMUrl(BASE_URL, {
        utm_source: 'whatsapp',
        utm_medium: 'social',
        utm_campaign: campaign,
        utm_content: 'direct_message'
      })
    }
  },
  
  // Email Marketing
  email: {
    // Newsletter campaigns
    newsletter: (campaign: string, edition?: string) => buildUTMUrl(BASE_URL, {
      utm_source: 'newsletter',
      utm_medium: 'email',
      utm_campaign: campaign,
      utm_content: edition || 'newsletter'
    }),
    
    // Promotional emails
    promotion: (campaign: string, offer?: string) => buildUTMUrl(BASE_URL, {
      utm_source: 'email',
      utm_medium: 'email',
      utm_campaign: campaign,
      utm_content: offer || 'promotion'
    }),
    
    // Welcome email series
    welcome: (emailNumber: number) => buildUTMUrl(BASE_URL, {
      utm_source: 'email',
      utm_medium: 'email',
      utm_campaign: 'welcome_series',
      utm_content: `welcome_email_${emailNumber}`
    })
  },
  
  // Google Ads
  googleAds: {
    // Search campaigns
    search: (campaign: string, adGroup: string, keyword?: string) => buildUTMUrl(BASE_URL, {
      utm_source: 'google',
      utm_medium: 'cpc',
      utm_campaign: campaign,
      utm_content: adGroup,
      utm_term: keyword
    }),
    
    // Display campaigns
    display: (campaign: string, placement?: string) => buildUTMUrl(BASE_URL, {
      utm_source: 'google',
      utm_medium: 'display',
      utm_campaign: campaign,
      utm_content: placement || 'display_ad'
    }),
    
    // Shopping campaigns
    shopping: (campaign: string, product?: string) => buildUTMUrl(BASE_URL, {
      utm_source: 'google',
      utm_medium: 'cpc',
      utm_campaign: campaign,
      utm_content: product || 'shopping_ad'
    })
  },
  
  // Influencer Marketing
  influencer: {
    // Influencer posts
    post: (influencerName: string, campaign: string) => buildUTMUrl(BASE_URL, {
      utm_source: 'influencer',
      utm_medium: 'social',
      utm_campaign: campaign,
      utm_content: influencerName.toLowerCase().replace(/\s+/g, '_')
    }),
    
    // Influencer stories
    story: (influencerName: string, campaign: string) => buildUTMUrl(BASE_URL, {
      utm_source: 'influencer',
      utm_medium: 'social',
      utm_campaign: campaign,
      utm_content: `${influencerName.toLowerCase().replace(/\s+/g, '_')}_story`
    })
  },
  
  // Offline Marketing
  offline: {
    // QR codes
    qrCode: (location: string, campaign: string) => buildUTMUrl(BASE_URL, {
      utm_source: 'qr_code',
      utm_medium: 'offline',
      utm_campaign: campaign,
      utm_content: location.toLowerCase().replace(/\s+/g, '_')
    }),
    
    // Print ads
    print: (publication: string, campaign: string) => buildUTMUrl(BASE_URL, {
      utm_source: 'print',
      utm_medium: 'offline',
      utm_campaign: campaign,
      utm_content: publication.toLowerCase().replace(/\s+/g, '_')
    }),
    
    // Radio ads
    radio: (station: string, campaign: string) => buildUTMUrl(BASE_URL, {
      utm_source: 'radio',
      utm_medium: 'offline',
      utm_campaign: campaign,
      utm_content: station.toLowerCase().replace(/\s+/g, '_')
    })
  },
  
  // Partnership Marketing
  partnerships: {
    // Partner websites
    website: (partnerName: string, campaign: string) => buildUTMUrl(BASE_URL, {
      utm_source: partnerName.toLowerCase().replace(/\s+/g, '_'),
      utm_medium: 'referral',
      utm_campaign: campaign,
      utm_content: 'partner_website'
    }),
    
    // Affiliate links
    affiliate: (affiliateName: string, campaign: string) => buildUTMUrl(BASE_URL, {
      utm_source: 'affiliate',
      utm_medium: 'referral',
      utm_campaign: campaign,
      utm_content: affiliateName.toLowerCase().replace(/\s+/g, '_')
    })
  }
};

// Common campaign names for Bibinii Farms
export const CampaignNames = {
  // Product launches
  FRESH_EGGS_LAUNCH: 'fresh_eggs_launch',
  CATFISH_COMING_SOON: 'catfish_coming_soon',
  VEGETABLES_COMING_SOON: 'vegetables_coming_soon',
  
  // Seasonal campaigns
  SPRING_FRESH: 'spring_fresh_2024',
  SUMMER_HARVEST: 'summer_harvest_2024',
  BACK_TO_SCHOOL: 'back_to_school_2024',
  HOLIDAY_SPECIAL: 'holiday_special_2024',
  
  // Brand awareness
  BRAND_AWARENESS: 'brand_awareness',
  FARMER_STORIES: 'farmer_stories',
  SUSTAINABILITY: 'sustainability_focus',
  
  // Customer acquisition
  NEW_CUSTOMER: 'new_customer_acquisition',
  REFERRAL_PROGRAM: 'referral_program',
  FIRST_ORDER_DISCOUNT: 'first_order_discount',
  
  // Retention campaigns
  CUSTOMER_RETENTION: 'customer_retention',
  LOYALTY_PROGRAM: 'loyalty_program',
  WIN_BACK: 'win_back_campaign'
};

// Generate UTM link for specific pages
export function generatePageUTM(page: string, params: UTMParams): string {
  const pageUrls = {
    home: BASE_URL,
    products: `${BASE_URL}/products`,
    eggs: `${BASE_URL}/products/fresh-bibinii-eggs`,
    order: `${BASE_URL}/order`,
    about: `${BASE_URL}/about`,
    contact: `${BASE_URL}/contact`,
    'store-locator': `${BASE_URL}/store-locator`
  };
  
  const baseUrl = pageUrls[page as keyof typeof pageUrls] || BASE_URL;
  return buildUTMUrl(baseUrl, params);
}

// Quick link generators for common scenarios
export const QuickLinks = {
  // Social media bio links
  instagramBio: () => MarketingLinks.social.instagram.bio('social_bio_2024'),
  facebookBio: () => MarketingLinks.social.facebook.organicPost('social_bio_2024'),
  
  // Email signature
  emailSignature: () => buildUTMUrl(BASE_URL, {
    utm_source: 'email_signature',
    utm_medium: 'email',
    utm_campaign: 'email_signature',
    utm_content: 'signature_link'
  }),
  
  // Business card QR code
  businessCard: () => MarketingLinks.offline.qrCode('business_card', 'business_card_2024'),
  
  // Newsletter signup
  newsletterSignup: () => buildUTMUrl(`${BASE_URL}/contact`, {
    utm_source: 'newsletter',
    utm_medium: 'email',
    utm_campaign: 'newsletter_signup',
    utm_content: 'signup_form'
  })
};
