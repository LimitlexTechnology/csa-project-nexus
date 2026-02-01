# CSA Hub Role Selection Flow & Logic

## Current Architecture Overview

### User Journey Paths

```
┌─────────────────────────────────────────────────────────────────┐
│                    LANDING PAGE (/landing)                      │
│              "Future-Proof Your Farm" - Main Entry Point         │
└─────────────────────────┬───────────────────────────────────────┘
                          │
          ┌───────────────┼───────────────┐
          │               │               │
      Get Started     Explore As Guest   Sign Up Now
      (All Three     (Browse First)      (Commit to
      lead to         (No Role Yet)       Role)
      Role Selection)
          │               │               │
          └───────────────┼───────────────┘
                          ↓
        ┌─────────────────────────────────────┐
        │  ROLE SELECTION (/role-selection)   │
        │  "SELECT YOUR ROLE"                 │
        │  5 Options Available:                │
        │  - Farmer                           │
        │  - Extension Officer/Expert         │
        │  - Buyer/Agribusiness               │
        │  - NGO/Government                   │
        │  - Explorer                         │
        │                                     │
        │  Action: Store role in localStorage │
        └──────────────┬──────────────────────┘
                       │
        ┌──────────────┴──────────────┐
        │                             │
    Role Selected              Role Selected
   (Not Explorer)             (Explorer)
        │                             │
        ↓                             ↓
   ┌────────────────┐        ┌──────────────────┐
   │ Welcome Page   │        │ Explorer Dashboard│
   │ (/welcome)     │        │ (/explorer-dash) │
   │ Onboarding     │        │ • Tour Features   │
   │ Carousel (5)   │        │ • All Role Cards  │
   │ Slides         │        │ • Platform Stats  │
   └────────┬───────┘        │ • Change Role CTA │
            │                └──────────────────┘
            ↓
   ┌────────────────────┐
   │  LOGIN PAGE        │
   │ (/login)           │
   │ • Sign Up / Login  │
   │ • Email & Password │
   │ • Check Role       │
   │   (Enforce Role)   │
   └────────┬───────────┘
            │
            ↓ (Redirect based on role)
   ┌─────────────────────────────────────────┐
   │    ROLE-SPECIFIC DASHBOARDS             │
   │                                         │
   │  Farmer (/farmer-dashboard)             │
   │  • Weather Alerts                       │
   │  • Crop Health Tools                    │
   │  • Yield Tracking                       │
   │  • Recent Climate Alerts                │
   │                                         │
   │  Expert (/expert-dashboard)             │
   │  • Farmer Support Q&A                   │
   │  • Publish Articles                     │
   │  • Impact Tracking                      │
   │  • Answer Questions                     │
   │                                         │
   │  Buyer (/buyer-dashboard)               │
   │  • Supplier Directory                   │
   │  • Market Prices                        │
   │  • Supply Chain Tools                   │
   │  • Sustainability Verified              │
   │                                         │
   │  NGO (/ngo-dashboard)                   │
   │  • Program Management                   │
   │  • Beneficiary Tracking                 │
   │  • Impact Reports                       │
   │  • Active Programs                      │
   │                                         │
   │  Explorer (/explorer-dashboard)         │
   │  • Role Discovery                       │
   │  • Feature Showcase                     │
   │  • Browse All Resources                 │
   │  • Change Role Button                   │
   └─────────────────────────────────────────┘
```

---

## Page-by-Page Logic Breakdown

### Universal Features (Available to ALL roles)

**All users have access to:**
- **🏪 Online Marketplace** - Buy/sell sustainable produce
  - Farmers: Sell directly to buyers
  - Buyers: Source from verified farmers  
  - Experts: View market dynamics & trends
  - NGOs: Facilitate member transactions
  - Explorers: Browse all suppliers & products
- **📚 Knowledge Hub** - 500+ learning resources
- **📰 News & Updates** - Latest trends & partnerships
- **🌤️ Weather Data** - Real-time climate intelligence
- **💬 Ask an Expert** - Q&A support

---

### 1. LANDING PAGE (`/landing`)
**Purpose:** First impression, value proposition, feature showcase  
**Role:** Entry point for all users (authenticated or not)  
**Key Elements:**
- Hero section with CTA buttons
- Weather/Updates/Daily Tip cards
- Features section (6 capabilities)
- Pricing & Role Benefits Matrix
- Newsletter CTA

**Buttons:**
- **"Get Started"** → `/role-selection` (New signup)
- **"Explore As Guest"** → `/explorer-dashboard` (Browse without role)
- **"Sign Up Now"** (Bottom CTA) → `/role-selection` (Explicit signup)

**Why This Works:**
- Neutral entry point for all users
- No role enforcement here
- Clear pathways: explore or commit

---

### 2. ROLE SELECTION PAGE (`/role-selection`)
**Purpose:** Mandatory role choice for new signup users  
**When Users Arrive:**
- After clicking "Get Started" or "Sign Up Now" from `/landing`
- If they try to access `/login` or `/welcome` without a role
- From `/explorer-dashboard` "Change Role" button

**Key Logic:**
```typescript
const dashboardMap = {
    'farmer': '/farmer-dashboard',
    'expert': '/expert-dashboard',
    'buyer': '/buyer-dashboard',
    'ngo': '/ngo-dashboard',
    'explorer': '/explorer-dashboard'
};

// Store role in localStorage
localStorage.setItem('userRole', selectedRole);
localStorage.setItem('onboardingDone', 'true');

// Redirect based on role
if (selectedRole === 'explorer') {
    router.push('/explorer-dashboard');
} else {
    router.push('/welcome'); // Onboarding carousel
}
```

**Why This Works:**
- Single decision point
- Transparent role descriptions
- "You can change this later" message reduces friction
- Proper localStorage persistence

---

### 3. WELCOME PAGE (`/welcome`) - CONDITIONAL
**Purpose:** Onboarding carousel for **non-Explorer roles**  
**When Users Arrive:**
- After selecting Farmer/Expert/Buyer/NGO role
- 5-slide carousel explaining platform benefits

**Key Logic:**
```typescript
useEffect(() => {
    const userRole = localStorage.getItem('userRole');
    if (!userRole) {
        // Enforce role selection
        router.push('/role-selection');
    }
    if (userRole === 'explorer') {
        // Explorers skip this
        router.push('/explorer-dashboard');
    }
}, [router]);

// On last slide "Next" button:
if (currentSlide < totalSlides - 1) {
    setCurrentSlide(prev => prev + 1);
} else {
    router.push('/login'); // After onboarding
}
```

**Slide Content:**
1. Climate & Farming Challenges
2. Smart Resource Management
3. Market Intelligence
4. Expert Knowledge & Community
5. Get Started CTA

**Why This Works:**
- Only shown to committed users (not explorers)
- Educates users before login
- Natural progression to `/login`
- Explorers skip directly to exploration

---

### 4. LOGIN PAGE (`/login`)
**Purpose:** Authentication gateway  
**When Users Arrive:**
- After `/welcome` carousel completion (new signup)
- Direct access attempt (existing users)

**Key Logic:**
```typescript
useEffect(() => {
    const userRole = localStorage.getItem('userRole');
    if (!userRole) {
        // Enforce: must select role first
        router.push('/role-selection');
    }
}, [router]);

// On successful login/signup:
const userRole = localStorage.getItem('userRole');
const dashboardMap = {
    'farmer': '/farmer-dashboard',
    'expert': '/expert-dashboard',
    'buyer': '/buyer-dashboard',
    'ngo': '/ngo-dashboard',
    'explorer': '/explorer-dashboard'
};

router.push(dashboardMap[userRole]);
```

**Why This Works:**
- Double-checks role exists
- Routes users to appropriate dashboard
- Prevents orphaned auth without role assignment

---

### 5. EXPLORER DASHBOARD (`/explorer-dashboard`)
**Purpose:** Platform discovery without commitment  
**When Users Arrive:**
- Immediately after selecting "Explorer" role
- Via "Explore As Guest" button from `/landing`

**Features:**
- Role description cards for all 4 user types
- Platform overview (stats, features)
- "Change Role" button to go back to `/role-selection`
- Links to all core platform sections

**Why This Path:**
- Lets curious users explore before committing
- No onboarding interruption
- Easy exit to select different role
- Low friction exploration

---

### 6-10. ROLE-SPECIFIC DASHBOARDS
**Paths:**
- `/farmer-dashboard` (Farmer)
- `/expert-dashboard` (Expert)
- `/buyer-dashboard` (Buyer)
- `/ngo-dashboard` (NGO)
- `/explorer-dashboard` (Explorer continuation)

**Key Logic:**
- Only accessible after role selection
- Each dashboard reflects role-specific features
- Links within dashboard to role-relevant tools
- "Change Role" option in header (back to `/role-selection`)

---

## Decision Tree

```
┌─ USER LANDS ON SITE
│
├─ Want to explore? 
│  ├─ Yes → /landing → "Explore As Guest" → /explorer-dashboard (Explorer)
│  └─ No → /landing → "Get Started" → /role-selection
│
├─ Selected Role?
│  ├─ No → /role-selection (ENFORCED)
│  └─ Yes:
│      ├─ Explorer? → /explorer-dashboard (Direct)
│      └─ Other → /welcome (Onboarding) → /login → Role Dashboard
│
├─ Try to access /login without role?
│  └─ Redirect to /role-selection
│
├─ Try to access /welcome without role?
│  └─ Redirect to /role-selection
│
└─ Access role-specific dashboard?
   └─ Shows personalized experience
      └─ All dashboards have "Change Role" option
         └─ Leads back to /role-selection
```

---

## Storage & Persistence

### localStorage Keys Used:
- **`userRole`** - Selected role (farmer/expert/buyer/ngo/explorer)
- **`onboardingDone`** - Whether user completed welcome carousel (true/false)

### Example Flow with Storage:
```javascript
// Step 1: User selects role
localStorage.setItem('userRole', 'farmer');
localStorage.setItem('onboardingDone', 'false');

// Step 2: User completes welcome carousel
localStorage.setItem('onboardingDone', 'true');

// Step 3: On dashboard load
if (!localStorage.getItem('userRole')) {
    // Redirect to role selection
}

// Step 4: User logs out or changes role
localStorage.removeItem('userRole');
localStorage.setItem('userRole', 'expert'); // New role
```

---

## Why This Architecture Works

### ✅ User Perspective
1. **Clear Entry Point** - Landing page explains everything
2. **Single Decision** - One mandatory choice (role)
3. **Customized Experience** - Each role sees relevant content
4. **Flexibility** - "Change Role" available anytime
5. **No Confusion** - Role enforcement prevents orphaned states

### ✅ Technical Perspective
1. **Enforced State** - Can't bypass role selection
2. **Persistent Data** - localStorage maintains role across sessions
3. **Proper Routing** - Each page knows where to redirect
4. **Fallback Logic** - Missing role always redirects to selection
5. **Scalable** - Easy to add new roles

### ✅ Business Perspective
1. **Data Collection** - Every user categorized by role
2. **Personalization** - Each role sees tailored experience
3. **Engagement** - Explorers can convert to committed roles
4. **Retention** - Role-specific content keeps users engaged
5. **Analytics** - Clear funnel tracking

---

## Potential Improvements

1. **Server-Side Role Validation**
   - Currently: localStorage-based (client-only)
   - Better: Store role in database after auth
   - Prevents role spoofing

2. **Role-Based Access Control (RBAC)**
   - Currently: No permission checks
   - Better: Backend validation of role permissions
   - Restrict API access by role

3. **Role Change Audit Trail**
   - Currently: Role changes aren't tracked
   - Better: Log all role changes with timestamps
   - Compliance & analytics

4. **Onboarding Tracking**
   - Currently: Boolean flag
   - Better: Track which slides completed
   - Re-show missed content

5. **Role-Specific Features Gates**
   - Currently: All features accessible
   - Better: Gate premium features by role + subscription
   - Subscription integration needed

---

## Summary: When & Why Each Page

| Page | When | Why |
|------|------|-----|
| `/landing` | First visit | Entry point, value prop, CTAs |
| `/role-selection` | After CTA or enforced | Choose role (mandatory) |
| `/welcome` | Non-explorer after role | Educate before login |
| `/login` | After welcome or direct | Authenticate user |
| `/[role]-dashboard` | After login | Personalized experience |
| `/explorer-dashboard` | Explorer role selected | Explore without commitment |

