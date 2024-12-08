# FitSphere  

## Overview
**FitSphere** turns wellness into a competitive, rewarding game. We create health groups where members pay to play, track progress, and earn rewards based on goal achievement, motivating everyone to stay fit and engaged.  

---

## Features  

### 1. Gamified Health Goals
Turn health routines into engaging challenges with progress tracking to stay motivated.
- **Why it matters**: Boosts consistency in achieving wellness objectives.
- **How it works**: Gamified goals drive daily habit adherence and enhance user engagement.

### 2. Group Health Challenges
Admins create groups with tailored health goals and activities.
- **Why it matters**: Encourages social interaction and collaboration in achieving health targets.
- **How it works**: Participants join groups, follow admin-set goals, and engage in innovative activities.

### 3. OKTO Authentication and Wallet Creation  
- Seamlessly integrates Okto authentication to enable secure user login.  
- Automatically generates a wallet on the Okto server for users without an existing wallet, enhancing liquidity and usability for decentralized applications. 

### 4. Incentive-based Fee Redistribution
Redistribute group joining fees based on goal completion rates.
- **Why it matters**: Keeps members motivated to actively participate and achieve set targets.
- **How it works**: Smart contracts manage fee pooling and distribution securely.

### 5. Blockchain-secured Transactions
Ensure transparency with blockchain technology.
- **Why it matters**: Builds trust in fee handling and goal-tracking processes.
- **How it works**: Uses Solidity smart contracts for secure payments and fee distribution.

### 6. Admin Profit-sharing Model
Admins earn a share of group fees, incentivizing effective group management.
- **Why it matters**: Encourages admins to design engaging challenges and keep members motivated.
- **How it works**: Fee-sharing mechanics reward admins for group activity success.

---

## Future Ideas  

## 1. AI-Driven Group Matching  
**Objective:**  
Enhance user engagement by assigning users to health groups that match their preferences and fitness levels.  

**Approach:**  
- Utilize AI algorithms to analyze user preferences (e.g., fitness goals, activity levels, interests).  

## 2. Incentives for Challenge Completion  
**Objective:**  
Motivate users to complete challenges and sustain long-term engagement.  

**Incentives:**  
- **NFT Rewards:**  
  - Award exclusive NFTs for milestone achievements.  
  - Enable showcasing or trading on supported platforms.  

- **Tiered Rewards:**  
  - Provide incremental rewards (e.g., fitness gear discounts, gift cards) for consistent performance.  

- **Leaderboard Rewards:**  
  - Recognize top performers with badges, trophies, or special mentions.  

## 3. Sensor Integration for Accurate Data  
**Objective:**  
Improve accuracy in tracking health parameters for challenge validation.  

**Approach:**  
- Integrate with wearables and smart sensors (e.g., smartwatches, fitness trackers).  
- Collect real-time health metrics, such as:  
  - Heart rate.  
  - Steps taken.  
  - Calories burned.  
  - Sleep quality.    

---

## Challenges Faced   

### 1. Okto SDK Integration  
- Resolved issues with Google Login and Okto Authentication by analyzing the Okto server's model structure.  
- Integrated Okto Embedded Wallets on the first day.  

### 2. API `auth_token` Issue  
- Debugged null `auth_token` responses and collaborated with the Okto team to fix them.  
- Enabled seamless API integration for the dashboard.  

### 3. Transaction API Integration  
- Optimized the Transaction API workflow for smooth on-chain transaction execution.  

### 4. Smart Contract Development  
- Designed a robust smart contract with:  
  - Structured data models for clarity.  
  - Modular functions for easy use.  
  - Comprehensive interfaces for seamless interaction.  

---

## Project Setup  

Follow these steps to set up and run the project locally:  
 

### Installation  

1. **Clone the Repository**  
   
Clone the repository and navigate to the project directory:  
```bash
git clone https://github.com/dhruv2981/EthIndia.git
cd EthIndia
npm install
```

2. **Run the development server** 
  ```bash
  npm run dev
  # or
  yarn dev
  # or
  pnpm dev
  # or
  bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


https://okto-sdk-react-example.vercel.app
https://okto-sdk-react-example.vercel.app/api/auth/callback/google