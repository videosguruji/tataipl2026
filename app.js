/* ==========================================
   CricPulse.ai Core Javascript Engine
   ========================================== */

// 1. Core Data Repository: Context-Aware Persona Mapping
const personaData = {
  "gt-fan": {
    systemPrompt: `You are CricPulse, a GT-devoted AI companion.
Prioritize Gujarat Titans, Shubman Gill's form, playoff qualification math, and highlights.
Tone: Enthusiastic, supportive, extremely knowledgeable on GT roster.`,
    
    aiOverview: `<p><strong>Gujarat Titans (GT)</strong> are currently sitting at <strong>#4</strong> in the standings, with Shubman Gill leading from the front with 482 runs at a blistering 146.8 strike rate. To guarantee a playoff birth without relying on net run-rate, GT needs to win 2 of their final 3 matches.</p>`,
    
    narrative: {
      title: "Captain Gill sets Ahmedabad on fire as GT claims crucial points!",
      body: "Under massive playoff pressure, Shubman Gill delivered a masterpiece 78 off 44 balls against a fiery MI pace attack. With a stellar partnership alongside Miller, GT set a matching target of 188. MI faltered under Rashid Khan's spin masterclass, bringing GT's playoff dreams back in their own hands."
    },
    
    scorecardStatus: "GT wins by 26 runs (Completed match summary generated)",
    
    suggestions: [
      "Will GT qualify for playoffs?",
      "Gill's latest runs & strike rate",
      "Next match analysis"
    ],
    
    chatResponses: {
      "will gt qualify for playoffs?": "With 12 points from 11 matches, GT needs 2 wins from the final 3 games to guarantee qualification. Our models estimate GT has an 85% probability of reaching the playoffs, with Shubman Gill's elite form at home being the single biggest factor!",
      "gill's latest runs & strike rate": "Captain Shubman Gill is having a spectacular campaign! Over 11 matches, he has amassed 482 runs at an average of 48.2 and a strike rate of 146.8. In the powerplay, his strike rate jumps to 154.2, making him the highest impact opener in the tournament.",
      "next match analysis": "GT takes on KKR next at Ahmedabad. KKR's spin-heavy attack will test GT in the middle overs. Key matchup: Shubman Gill vs Sunil Narine. Our AI simulation recommends GT batting first to utilize Narendra Modi Stadium's defending bias."
    },
    
    defaultReply: "Titans assemble! Shubman Gill is locked in and Rashid Khan is spinning webs. Ask me about playoff scenarios, player stats, or match highlights!"
  },
  
  "fantasy": {
    systemPrompt: `You are CricPulse, an elite Fantasy Cricket Strategist.
Prioritize player efficiency form metrics, wicket taking probability, match phase analytics, and pitch reports.
Tone: Highly analytical, objective, risk-mitigating, metrics-focused.`,
    
    aiOverview: `<p><strong>Ahmedabad Pitch Report:</strong> Dry surface with a high friction index favoring spin drift and off-cutters in the middle-to-death overs. <strong>Shubman Gill</strong> rates at <strong>9.8/10</strong> in impact index, while <strong>Rashid Khan</strong>'s wicket probability rises by 32% during chase phases.</p>`,
    
    narrative: {
      title: "Tactical Masterclass: How Gill's safe powerplay approach secured 120+ Fantasy Points",
      body: "For fantasy managers, Gill's 78 was gold. He minimized high-risk aerial shots early on, gathering 62 runs on the ground before accelerating in the death overs. Rashid Khan's 3-wicket haul in the middle overs rewarded bold managers who kept him as Vice Captain, yielding massive defensive point returns."
    },
    
    scorecardStatus: "Strategic Insight: Bowling first yielded 24% more fantasy points.",
    
    suggestions: [
      "Who are the top captain choices?",
      "Pitch & Wicket Probability",
      "Differential picks for next game"
    ],
    
    chatResponses: {
      "who are the top captain choices?": "For the upcoming matches, your top tier captains are: 1. Shubman Gill (GT) - High safety margin, excels at Ahmedabad. 2. Rashid Khan (GT) - High ceiling due to consistent wicket-taking. 3. Sunil Narine (KKR) - High value all-rounder points.",
      "pitch & wicket probability": "The pitch is exhibiting slow, low bounce characteristics. Bowlers who utilize slower balls (cutters) have a 45% higher wicket-taking probability in the death overs. Spin bowlers are generating 2.4 degrees of turn in the middle overs, boosting Rashid Khan's efficiency.",
      "differential picks for next game": "Keep an eye on GT's Sai Sudharsan. Owned by only 18% of fantasy managers, his technical anchoring capacity on slow tracks makes him a high-yield differential pick for stability points."
    },
    
    defaultReply: "Lineup optimization mode active. Ask me about player form, strike rates, bowler vs batsman matchups, or pitch conditions to dominate your fantasy leagues!"
  },
  
  "casual": {
    systemPrompt: `You are CricPulse, a friendly and energetic Casual Cricket Guide.
Condense data. Keep details highly simplified. Highlight high-drama moments and narrative storyboards.
Tone: Excited, engaging, clear, free of complex statistical jargon.`,
    
    aiOverview: `<p>What an absolute thriller! <strong>Gujarat Titans</strong> beat Mumbai Indians by <strong>26 runs</strong>. Captain Shubman Gill was the hero with a stunning 78-run knock that set the stadium alive, while Rashid Khan's spin shut down the opposition!</p>`,
    
    narrative: {
      title: "Gill and Rashid steal the show in Ahmedabad thriller!",
      body: "Gujarat Titans fans had everything to celebrate! Captain Shubman Gill played like a superstar, smashing boundaries all over the park to post a massive target of 188. When Mumbai tried to chase it down, spin wizard Rashid Khan stepped in, taking crucial wickets to secure a comfortable victory for GT."
    },
    
    scorecardStatus: "Finished: GT wins! Shubman Gill named Player of the Match.",
    
    suggestions: [
      "Show me the key moments",
      "Summary of GT vs MI",
      "When is the next game?"
    ],
    
    chatResponses: {
      "show me the key moments": "Here are the top 3 moments: 1. Gill's gorgeous straight drive six in the 4th over! 2. The crucial 84-run partnership between Gill and Miller. 3. Rashid Khan's brilliant double-wicket over that completely broke MI's chase!",
      "summary of gt vs mi": "GT batted first and scored a massive 188 runs, thanks to a superb captain's knock of 78 by Shubman Gill. In response, Mumbai Indians struggled against GT's spinners and were restricted to 162/8. GT won comfortably by 26 runs!",
      "when is the next game?": "Gujarat Titans take on Kolkata Knight Riders (KKR) this coming Friday at 7:30 PM. It's going to be a massive game with huge playoff implications!"
    },
    
    defaultReply: "What a season! I'm here to give you quick, fun, and easy-to-understand updates. Ask me for a summary, high-drama moments, or upcoming match details!"
  },
  
  "stats": {
    systemPrompt: `You are CricPulse Analytics, a hardcore Cricket Data Scientist.
Output exhaustive metrics, strike rate trends, bowler vs batsman matrices, and dense tables.
Tone: Ultra-precise, dry, quantitative, technical.`,
    
    aiOverview: `<p><strong>Analytical Match Synthesis (GT vs MI):</strong> GT batted first, securing a projected above-par score of 188. Gill's run-distribution: 45% leg-side, 55% off-side. Rashid Khan's economy rate was 5.5 runs/over, generating an outstanding <strong>32.8% dot-ball percentage</strong>.</p>`,
    
    narrative: {
      title: "Quantitative Breakdown: Powerplay Run-Rate Delta & Middle Over Spin Friction",
      body: "An empirical look at the numbers shows GT's powerplay acceleration (RR: 9.4) gave them a 14-run headstart over MI's powerplay (RR: 8.0). During overs 7-15, GT's spinners bowled 18 dot balls out of 36, suffocating MI's run-rate progression curves and leading to high-risk shot execution errors."
    },
    
    scorecardStatus: "Stats: GT run-rate 9.40 vs MI run-rate 8.10. Match completed.",
    
    suggestions: [
      "Bowler Economy Breakdown",
      "Gill vs Spin statistics",
      "Run-rate progression comparison"
    ],
    
    chatResponses: {
      "bowler economy breakdown": "Bowler Economy Matrix:\n- Rashid Khan: 4.0 Overs | 3 Wickets | 22 Runs | Econ: 5.50 | Dots: 12\n- Umesh Yadav: 3.0 Overs | 1 Wicket | 28 Runs | Econ: 9.33 | Dots: 6\n- Jasprit Bumrah: 4.0 Overs | 2 Wickets | 24 Runs | Econ: 6.00 | Dots: 14",
      "gill vs spin statistics": "Gill's batting efficiency metrics against spin in Tata IPL 2026:\n- Average: 64.20\n- Strike Rate vs Off-Spin: 138.40\n- Strike Rate vs Leg-Spin: 156.90\n- False Shot Percentage: 8.4% (extremely low)",
      "run-rate progression comparison": "Run-Rate progression delta:\n- Overs 1-6: GT 56/1 (9.33) | MI 48/2 (8.00)\n- Overs 7-15: GT 74/2 (8.22) | MI 62/4 (6.88)\n- Overs 16-20: GT 58/2 (11.60) | MI 52/2 (10.40)"
    },
    
    defaultReply: "Data stream connected. Ready to serve deep statistical modeling, scatter graphs, strike rate variables, and historical matchups. Specify query vectors."
  }
};

// 2. State Indicators
const DEFAULT_GEMINI_API_KEY = "AIzaSyDcd4dHBewHDORmo6KPbIps3cIvwxNzoDk";
let currentPersona = "gt-fan";

// ==========================================
// TATA IPL 2026 Encyclopedic Offline Database
// ==========================================
const ipl2026Database = {
  schedule: {
    title: "📅 TATA IPL 2026 Schedule & Format",
    content: `
      <p>The <strong>TATA IPL 2026</strong> season runs from <strong>March 28, 2026, to May 31, 2026</strong>. The tournament features 74 high-octane matches played across India.</p>
      <div class="chat-table-wrapper">
        <table class="chat-table">
          <thead>
            <tr>
              <th>Phase</th>
              <th>Details</th>
              <th>Key Highlights</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>League Stage</strong></td>
              <td>70 Matches (14 games/team)</td>
              <td>Home & Away format, top 4 qualify</td>
            </tr>
            <tr>
              <td><strong>Qualifier 1</strong></td>
              <td>Late May 2026</td>
              <td>1st vs 2nd place (winner to final)</td>
            </tr>
            <tr>
              <td><strong>Eliminator</strong></td>
              <td>Late May 2026</td>
              <td>3rd vs 4th place (loser out)</td>
            </tr>
            <tr>
              <td><strong>Qualifier 2</strong></td>
              <td>Late May 2026</td>
              <td>Loser Q1 vs Winner Eliminator</td>
            </tr>
            <tr>
              <td><strong>Grand Final</strong></td>
              <td>May 31, 2026</td>
              <td>Decided at Narendra Modi Stadium</td>
            </tr>
          </tbody>
        </table>
      </div>
      <ul>
        <li><strong>Defending Champions:</strong> Royal Challengers Bengaluru (RCB)</li>
        <li><strong>Matches Format:</strong> Standard league structure plus high-stakes playoffs</li>
        <li><strong>Live Broadcasts:</strong> Star Sports Network & JioCinema (digital)</li>
      </ul>
    `
  },
  venues: {
    title: "🏟️ TATA IPL 2026 Venues & Pitch Conditions",
    content: `
      <p>Matches are held across <strong>13 stadiums</strong> including primary home bases and secondary neutral venues to accommodate logistics and regional election-year schedules.</p>
      <div class="chat-table-wrapper">
        <table class="chat-table">
          <thead>
            <tr>
              <th>Venue (City)</th>
              <th>Home Team</th>
              <th>Pitch Condition & Traits</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Narendra Modi (Ahmedabad)</strong></td>
              <td>GT</td>
              <td>Massive size; friction index favors spin drift in middle overs. Defending bias.</td>
            </tr>
            <tr>
              <td><strong>Wankhede (Mumbai)</strong></td>
              <td>MI</td>
              <td>Red soil bounce, fast outfields; significant evening dew factor favoring chase.</td>
            </tr>
            <tr>
              <td><strong>M. Chinnaswamy (Bengaluru)</strong></td>
              <td>RCB</td>
              <td>High altitude, short boundaries; flat track yielding ultra-high-scoring encounters.</td>
            </tr>
            <tr>
              <td><strong>M.A. Chidambaram (Chennai)</strong></td>
              <td>CSK</td>
              <td>Dry, slow turner; favors traditional spin combinations and off-cutters.</td>
            </tr>
            <tr>
              <td><strong>Eden Gardens (Kolkata)</strong></td>
              <td>KKR</td>
              <td>Sporting track with good pace and bounce, fast outfield with dew support.</td>
            </tr>
            <tr>
              <td><strong>Dharamshala (Himachal)</strong></td>
              <td>PBKS (Sec)</td>
              <td>High altitude; cool weather allows high swing and seam movement early.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p><i>*Secondary Venues include Dharamshala, Guwahati, and Mullanpur, offering distinct weather conditions and grass-heavy pitches.</i></p>
    `
  },
  rules: {
    title: "📜 New Stricter BCCI Rules for 2026 Season",
    content: `
      <p>To improve discipline and match operations, the BCCI has implemented rigorous new rules for the 2026 season:</p>
      <div class="chat-rules-card">
        <div class="chat-rules-title">🚫 Ban on Match-Day Practice</div>
        <p>Teams are strictly prohibited from conducting any practice sessions on match days to avoid pitch exhaustion and streamline security logistics.</p>
      </div>
      <div class="chat-rules-card">
        <div class="chat-rules-title">⚡ 3.5-Hour Light Practice Limits</div>
        <p>Evening practices under stadium lights are strictly capped at 3.5 hours. Teams are prohibited from sharing nets or using non-assigned pitches.</p>
      </div>
      <div class="chat-rules-card">
        <div class="chat-rules-title">🚌 Mandatory Team Bus Transport</div>
        <p>All players and support personnel are required to travel together in the official team bus for official practice sessions and games to manage traffic flow.</p>
      </div>
      <div class="chat-rules-card">
        <div class="chat-rules-title">🧢 Presentation Cap Guidelines</div>
        <p>Orange and Purple Cap holders are mandatory required to wear their respective caps during the first two overs of any match, and sleeveless shirts are banned in post-match presentations.</p>
      </div>
    `
  },
  teams: {
    title: "🏆 TATA IPL 2026 Participating Teams & Captains",
    content: `
      <p>The 10 franchises representing their regions are competing with balanced squads and legendary leaders:</p>
      <div class="chat-table-wrapper">
        <table class="chat-table">
          <thead>
            <tr>
              <th>Franchise Name</th>
              <th>Team Captain</th>
              <th>Primary Stadium</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Royal Challengers Bengaluru (RCB)</strong></td>
              <td>Faf du Plessis</td>
              <td>M. Chinnaswamy Stadium</td>
            </tr>
            <tr>
              <td><strong>Chennai Super Kings (CSK)</strong></td>
              <td>Ruturaj Gaikwad</td>
              <td>M.A. Chidambaram Stadium</td>
            </tr>
            <tr>
              <td><strong>Gujarat Titans (GT)</strong></td>
              <td>Shubman Gill</td>
              <td>Narendra Modi Stadium</td>
            </tr>
            <tr>
              <td><strong>Mumbai Indians (MI)</strong></td>
              <td>Hardik Pandya</td>
              <td>Wankhede Stadium</td>
            </tr>
            <tr>
              <td><strong>Kolkata Knight Riders (KKR)</strong></td>
              <td>Shreyas Iyer</td>
              <td>Eden Gardens</td>
            </tr>
            <tr>
              <td><strong>Sunrisers Hyderabad (SRH)</strong></td>
              <td>Pat Cummins</td>
              <td>Rajiv Gandhi Stadium</td>
            </tr>
            <tr>
              <td><strong>Delhi Capitals (DC)</strong></td>
              <td>Rishabh Pant</td>
              <td>Arun Jaitley Stadium</td>
            </tr>
            <tr>
              <td><strong>Rajasthan Royals (RR)</strong></td>
              <td>Sanju Samson</td>
              <td>Sawai Mansingh Stadium</td>
            </tr>
            <tr>
              <td><strong>Lucknow Super Giants (LSG)</strong></td>
              <td>Nicholas Pooran</td>
              <td>Ekana Stadium</td>
            </tr>
            <tr>
              <td><strong>Punjab Kings (PBKS)</strong></td>
              <td>Jitesh Sharma</td>
              <td>Mullanpur / Dharamshala</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },
  caps: {
    title: "🧢 Orange & Purple Cap Contenders (TATA IPL 2026)",
    content: `
      <p>Here are the latest top performers dominating the TATA IPL 2026 statistical leaderboards:</p>
      <div class="chat-table-wrapper">
        <table class="chat-table">
          <thead>
            <tr>
              <th>Player & Team</th>
              <th>Runs / Wkts</th>
              <th>Current Standings & Impact Index</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Shubman Gill (GT)</strong> 🟠</td>
              <td><strong>482 Runs</strong></td>
              <td>Avg: 48.20 | Strike Rate: 146.8 (Highest impact opener at Narendra Modi Stadium)</td>
            </tr>
            <tr>
              <td><strong>Virat Kohli (RCB)</strong> 🟠</td>
              <td><strong>465 Runs</strong></td>
              <td>Avg: 46.50 | Anchor rating of 9.6/10 (Leading runs in chase phases)</td>
            </tr>
            <tr>
              <td><strong>Ruturaj Gaikwad (CSK)</strong> 🟠</td>
              <td><strong>440 Runs</strong></td>
              <td>Avg: 44.00 | Strike Rate: 142.1 (Crucial steady runs in Chepauk turners)</td>
            </tr>
            <tr>
              <td><strong>Rashid Khan (GT)</strong> 🟣</td>
              <td><strong>18 Wickets</strong></td>
              <td>Econ: 5.50 | 32.8% dot-ball ratio (Leading wicket taker in middle overs)</td>
            </tr>
            <tr>
              <td><strong>Jasprit Bumrah (MI)</strong> 🟣</td>
              <td><strong>17 Wickets</strong></td>
              <td>Econ: 6.00 | Leading death-over yorker efficiency metric (16 wickets in death phase)</td>
            </tr>
            <tr>
              <td><strong>Yuzvendra Chahal (RR)</strong> 🟣</td>
              <td><strong>16 Wickets</strong></td>
              <td>Econ: 7.20 | Leading wicket taker in spinners-turn battles</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p><i>*Rules mandate that Orange/Purple Cap holders must wear their caps during the first two overs of match play!</i></p>
    `
  }
};

// 3. Elements Selection
const switcher = document.getElementById("personaSwitcher");
const systemPromptText = document.getElementById("system-prompt-text");
const aiOverviewText = document.getElementById("ai-overview-text");
const matchStatusText = document.getElementById("match-status-text");
const storyTag = document.getElementById("story-tag-id");
const storyBodyText = document.getElementById("story-body-text");
const suggestionChips = document.getElementById("suggestion-chips");
const chatHistory = document.getElementById("chat-history");
const chatInputForm = document.getElementById("chat-input-form");
const chatInputField = document.getElementById("chat-input-field");
const playoffSlider = document.getElementById("playoff-slider");
const playoffPercentage = document.getElementById("playoff-percentage");
const playoffResultDesc = document.getElementById("playoff-result-desc");
const regenBtn = document.getElementById("regen-overview");

// Widgets Panels
const playoffWidget = document.getElementById("playoff-widget-panel");
const fantasyWidget = document.getElementById("fantasy-widget-panel");
const statsWidget = document.getElementById("stats-widget-panel");

// 4. Persona Routing Logic
function setPersona(persona) {
  currentPersona = persona;
  
  // Update Body Class for CSS variable shifts
  document.body.className = `persona-${persona}`;
  
  // Update Switcher Active Button Style
  const buttons = switcher.querySelectorAll(".switcher-btn");
  buttons.forEach(btn => {
    if (btn.getAttribute("data-persona") === persona) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Pull Persona Context
  const context = personaData[persona];

  // Update Dynamic Text Panels with animations
  systemPromptText.classList.add("fade-in");
  systemPromptText.textContent = context.systemPrompt;
  
  aiOverviewText.classList.add("fade-in");
  aiOverviewText.innerHTML = context.aiOverview;
  
  matchStatusText.textContent = context.scorecardStatus;
  
  storyTag.textContent = persona === "casual" ? "Casual Review" : (persona === "stats" ? "Analytical Insight" : (persona === "fantasy" ? "Fantasy Review" : "GT Perspective"));
  
  storyBodyText.innerHTML = `
    <p class="story-highlight">"${context.narrative.title}"</p>
    <p>${context.narrative.body}</p>
  `;

  // Render Suggestion Chips
  suggestionChips.innerHTML = "";
  context.suggestions.forEach(sug => {
    const btn = document.createElement("button");
    btn.className = "chip-btn";
    btn.textContent = sug;
    btn.onclick = () => handleSuggestionClick(sug);
    suggestionChips.appendChild(btn);
  });

  // Clean and Reset Chat with a default bot message
  chatHistory.innerHTML = `
    <div class="chat-message bot">
      <div class="avatar">🤖</div>
      <div class="message-bubble">
        <p>${context.defaultReply}</p>
        <span class="timestamp">Just now</span>
      </div>
    </div>
  `;

  // Dynamic Widget Visibility Shifts
  if (persona === "fantasy") {
    fantasyWidget.classList.remove("hidden");
    playoffWidget.classList.add("hidden");
    statsWidget.classList.add("hidden");
  } else if (persona === "stats") {
    statsWidget.classList.remove("hidden");
    fantasyWidget.classList.add("hidden");
    playoffWidget.classList.add("hidden");
    // Trigger Chart animations
    animateChartBars();
  } else {
    // gt-fan and casual default to playoff simulation widget
    playoffWidget.classList.remove("hidden");
    fantasyWidget.classList.add("hidden");
    statsWidget.classList.add("hidden");
  }

  // Remove fade animations after completion
  setTimeout(() => {
    systemPromptText.classList.remove("fade-in");
    aiOverviewText.classList.remove("fade-in");
  }, 500);
}

// 5. Chart Bar Animation helper
function animateChartBars() {
  const bars = document.querySelectorAll(".bar");
  bars.forEach((bar, index) => {
    const originalHeight = bar.style.height;
    bar.style.height = "0%";
    setTimeout(() => {
      bar.style.height = originalHeight;
    }, index * 100);
  });
}

// 6. Interactive Playoff Probability Calculator Simulation
playoffSlider.oninput = function() {
  const wins = parseInt(this.value);
  let percentage = "0%";
  let description = "";

  switch (wins) {
    case 0:
      percentage = "2%";
      description = "GT is practically eliminated. Requires impossible mathematical permutations in other games.";
      break;
    case 1:
      percentage = "40%";
      description = "GT requires net run-rate (NRR) assistance and matches other outcomes to seal 4th spot.";
      break;
    case 2:
      percentage = "85%";
      description = "High probability! AI models suggest a guaranteed 4th place finish.";
      break;
    case 3:
      percentage = "99%";
      description = "GT qualifies with flying colors! Strong chance of sealing the #3 seed.";
      break;
  }

  playoffPercentage.textContent = percentage;
  playoffPercentage.style.transform = "scale(1.2)";
  setTimeout(() => playoffPercentage.style.transform = "scale(1)", 200);
  playoffResultDesc.textContent = description;
};

// 7. Chat Companion pipeline (Simulated RAG with Gemini)
function appendChatMessage(sender, text) {
  const msgDiv = document.createElement("div");
  msgDiv.className = `chat-message ${sender}`;
  
  const avatar = sender === "user" ? "👤" : "🤖";
  
  msgDiv.innerHTML = `
    <div class="avatar">${avatar}</div>
    <div class="message-bubble">
      <p>${text.replace(/\n/g, '<br>')}</p>
      <span class="timestamp">Just now</span>
    </div>
  `;
  
  chatHistory.appendChild(msgDiv);
  chatHistory.scrollTop = chatHistory.scrollHeight;
}

function handleChatSubmit(e) {
  if (e) e.preventDefault();
  
  const query = chatInputField.value.trim();
  if (!query) return;

  // Append user bubble
  appendChatMessage("user", query);
  chatInputField.value = "";

  // Gemini Simulated thinking delay
  const typingDiv = document.createElement("div");
  typingDiv.className = "chat-message bot";
  typingDiv.id = "gemini-typing";
  typingDiv.innerHTML = `
    <div class="avatar">🤖</div>
    <div class="message-bubble">
      <p><i>Gemini thinking...</i></p>
    </div>
  `;
  chatHistory.appendChild(typingDiv);
  chatHistory.scrollTop = chatHistory.scrollHeight;

  // Check for live API Key or Fallback to Default
  const apiKey = localStorage.getItem("gemini_api_key") || DEFAULT_GEMINI_API_KEY;
  const context = personaData[currentPersona];

  // Compile Ground Truth IPL 2026 Database for Gemini Injection
  const iplGroundTruth = `
    TATA IPL 2026 Official Ground Truth Reference Database:
    - Schedule & Dates: March 28, 2026 to May 31, 2026. 74 total matches (70 league stage, 4 playoffs). Grand Final on May 31, 2026 at Narendra Modi Stadium (Ahmedabad).
    - 10 Franchises & Captains: Royal Challengers Bengaluru (RCB - Faf du Plessis), Chennai Super Kings (CSK - Ruturaj Gaikwad), Gujarat Titans (GT - Shubman Gill), Mumbai Indians (MI - Hardik Pandya), Kolkata Knight Riders (KKR - Shreyas Iyer), Sunrisers Hyderabad (SRH - Pat Cummins), Delhi Capitals (DC - Rishabh Pant), Rajasthan Royals (RR - Sanju Samson), Lucknow Super Giants (LSG - Nicholas Pooran), Punjab Kings (PBKS - Jitesh Sharma).
    - 13 Venues & Stadiums: Primary home bases: M. Chinnaswamy Stadium (Bengaluru - high altitude, small boundary, flat track), Wankhede Stadium (Mumbai - fast outfield, high dew factor favoring chasing team), Narendra Modi Stadium (Ahmedabad - massive capacity, high spin-friction index), M.A. Chidambaram Stadium (Chepauk, Chennai - slow, dry turner). Secondary neutral bases include Dharamshala (high swing & seam), Guwahati, Mullanpur.
    - Stricter 2026 BCCI Rules: 1. Strict ban on match-day practice sessions. 2. 3.5-hour maximum practice duration under stadium lights. 3. Mandatory shared team bus transport for all practices/games. 4. Orange/Purple Cap holders must wear their caps during the first two overs of the match. 5. Strict dress code in post-match presentations (no sleeveless shirts).
    - Orange Cap Contenders: Shubman Gill (GT - 482 runs), Virat Kohli (RCB - 465 runs), Ruturaj Gaikwad (CSK - 440 runs).
    - Purple Cap Contenders: Rashid Khan (GT - 18 wickets, Econ 5.50), Jasprit Bumrah (MI - 17 wickets, Econ 6.00), Yuzvendra Chahal (RR - 16 wickets, Econ 7.20).
  `;

  if (apiKey) {
    // MAKE REAL LIVE API CALL TO GEMINI 1.5 FLASH
    const systemPrompt = `${context.systemPrompt}\n\n${iplGroundTruth}`;
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    
    const payload = {
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `System Context & Ground Truth:\n${systemPrompt}\n\nUser Question: ${query}\n\nAnswer the question using the TATA IPL 2026 Ground Truth database where applicable. Keep it highly detailed, engaging, in character, and structured with HTML lists or custom tables if listing information.`
            }
          ]
        }
      ]
    };
    
    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(data => {
      // Remove typing bubble
      const typing = document.getElementById("gemini-typing");
      if (typing) typing.remove();
      
      let answer = "";
      try {
        answer = data.candidates[0].content.parts[0].text;
      } catch (err) {
        answer = "I received a live network reply, but could not parse the content candidate. Please double-check your API key limits and status.";
        console.error("Gemini Error:", data);
      }
      appendChatMessage("bot", answer);
    })
    .catch(err => {
      // Remove typing bubble
      const typing = document.getElementById("gemini-typing");
      if (typing) typing.remove();
      
      appendChatMessage("bot", "Network Connection Error: Direct browser call to Google AI Studio failed. Check your internet connection.");
      console.error("Network Error:", err);
    });
    return;
  }

  // FALLBACK SIMULATION (Fuzzy-Match database)
  setTimeout(() => {
    // Remove typing bubble
    const typing = document.getElementById("gemini-typing");
    if (typing) typing.remove();

    // Map query response
    const normalizedQuery = query.toLowerCase();
    
    // 1. TATA IPL 2026 Global Encyclopedia Check
    if (normalizedQuery.includes("schedule") || normalizedQuery.includes("date") || normalizedQuery.includes("calendar") || normalizedQuery.includes("when is") || normalizedQuery.includes("final")) {
      appendChatMessage("bot", `<h3>${ipl2026Database.schedule.title}</h3>${ipl2026Database.schedule.content}`);
      return;
    }
    if (normalizedQuery.includes("venue") || normalizedQuery.includes("stadium") || normalizedQuery.includes("pitch") || normalizedQuery.includes("ground") || normalizedQuery.includes("where is")) {
      appendChatMessage("bot", `<h3>${ipl2026Database.venues.title}</h3>${ipl2026Database.venues.content}`);
      return;
    }
    if (normalizedQuery.includes("rule") || normalizedQuery.includes("bcci") || normalizedQuery.includes("guideline") || normalizedQuery.includes("regulation") || normalizedQuery.includes("ban") || normalizedQuery.includes("practice")) {
      appendChatMessage("bot", `<h3>${ipl2026Database.rules.title}</h3>${ipl2026Database.rules.content}`);
      return;
    }
    if (normalizedQuery.includes("team") || normalizedQuery.includes("captain") || normalizedQuery.includes("squad") || normalizedQuery.includes("franchise") || normalizedQuery.includes("leader") || normalizedQuery.includes("captains")) {
      appendChatMessage("bot", `<h3>${ipl2026Database.teams.title}</h3>${ipl2026Database.teams.content}`);
      return;
    }
    if (normalizedQuery.includes("cap") || normalizedQuery.includes("orange") || normalizedQuery.includes("purple") || normalizedQuery.includes("scorer") || normalizedQuery.includes("wicket") || normalizedQuery.includes("bowler") || normalizedQuery.includes("batsman")) {
      appendChatMessage("bot", `<h3>${ipl2026Database.caps.title}</h3>${ipl2026Database.caps.content}`);
      return;
    }

    // 2. Persona standard simulated reply
    let answer = context.chatResponses[normalizedQuery];
    if (!answer) {
      // Fuzzy search in current persona responses
      const keys = Object.keys(context.chatResponses);
      const match = keys.find(key => normalizedQuery.includes(key) || key.includes(normalizedQuery));
      if (match) {
        answer = context.chatResponses[match];
      } else {
        // Fallback generic but personalized responder
        if (currentPersona === "gt-fan") {
          answer = `As a dedicated Titans fan, I've checked the latest stats for "${query}". While we process live matches, Gill remains our top run scorer and Ahmedabad looks set for a spin battle next game! Try typing <b>"schedule"</b> or <b>"new rules"</b> for more detailed encyclopedia answers!`;
        } else if (currentPersona === "fantasy") {
          answer = `Analyzing fantasy statistics for "${query}". Pitch indices show optimal balance for seam-bowling variance. I recommend reviewing player form and target picks before lineup locking! Try typing <b>"cap race"</b> to see top fantasy players!`;
        } else if (currentPersona === "casual") {
          answer = `Wow! That's a super cool query about "${query}". The match is extremely heated, and you won't want to miss Gill's massive boundary streak coming up next! Type <b>"teams"</b> to see all captains in 2026!`;
        } else {
          answer = `Regression analysis modeling for "${query}" completed. Variance metrics are well within standard parameters. Ahmedabad's middle-over spin friction coefficient remains at 0.78. Type <b>"venues"</b> to view all stadium pitch traits.`;
        }
      }
    }

    appendChatMessage("bot", answer);
  }, 1000);
}

function handleSuggestionClick(text) {
  chatInputField.value = text;
  handleChatSubmit();
}

// 8. Event Listeners Setup
switcher.addEventListener("click", (e) => {
  const btn = e.target.closest(".switcher-btn");
  if (!btn) return;
  const persona = btn.getAttribute("data-persona");
  setPersona(persona);
});

chatInputForm.addEventListener("submit", handleChatSubmit);

// TATA IPL 2026 Reference Hub Click Actions
const refButtons = ["schedule", "venues", "rules", "teams", "caps"];
refButtons.forEach(topic => {
  const btn = document.getElementById(`ref-${topic}`);
  if (btn) {
    btn.addEventListener("click", () => {
      const data = ipl2026Database[topic];
      if (!data) return;

      // Append user bubble showing the clicked topic
      appendChatMessage("user", `View ${topic.charAt(0).toUpperCase() + topic.slice(1)}`);
      
      // Simulated retrieval thinking delay
      const typingDiv = document.createElement("div");
      typingDiv.className = "chat-message bot";
      typingDiv.id = "gemini-typing";
      typingDiv.innerHTML = `
        <div class="avatar">🤖</div>
        <div class="message-bubble">
          <p><i>Querying CricPulse TATA IPL 2026 Encyclopedia...</i></p>
        </div>
      `;
      chatHistory.appendChild(typingDiv);
      chatHistory.scrollTop = chatHistory.scrollHeight;

      setTimeout(() => {
        const typing = document.getElementById("gemini-typing");
        if (typing) typing.remove();

        // Render beautiful rich database entry in chat bubble
        appendChatMessage("bot", `<h3>${data.title}</h3>${data.content}`);
      }, 500);
    });
  }
});

// Re-Sync Button animation
regenBtn.onclick = function() {
  const icon = this.querySelector(".regen-icon");
  icon.style.transform = "rotate(360deg)";
  icon.style.transition = "transform 0.8s";
  
  aiOverviewText.style.opacity = 0.5;
  setTimeout(() => {
    aiOverviewText.style.opacity = 1;
    icon.style.transform = "rotate(0deg)";
    icon.style.transition = "none";
  }, 800);
};

// 9. Settings Modal Controls
const settingsModal = document.getElementById("settings-modal");
const openSettingsBtn = document.getElementById("open-settings-btn");
const closeSettingsBtn = document.getElementById("close-settings-btn");
const saveSettingsBtn = document.getElementById("save-settings-btn");
const clearSettingsBtn = document.getElementById("clear-settings-btn");
const geminiApiKeyField = document.getElementById("gemini-api-key");

// Open Modal
openSettingsBtn.onclick = () => {
  const savedKey = localStorage.getItem("gemini_api_key") || DEFAULT_GEMINI_API_KEY;
  geminiApiKeyField.value = savedKey;
  settingsModal.classList.remove("hidden");
};

// Close Modal
closeSettingsBtn.onclick = () => {
  settingsModal.classList.add("hidden");
};

// Save Settings
saveSettingsBtn.onclick = () => {
  const key = geminiApiKeyField.value.trim();
  if (key) {
    localStorage.setItem("gemini_api_key", key);
    alert("Configurations saved! CricPulse.ai is now connected live to Google AI Studio.");
  } else {
    localStorage.removeItem("gemini_api_key");
  }
  settingsModal.classList.add("hidden");
};

// Clear Settings
clearSettingsBtn.onclick = () => {
  localStorage.removeItem("gemini_api_key");
  geminiApiKeyField.value = "";
  alert("API Key cleared. CricPulse.ai will revert back to high-fidelity simulated response modes.");
  settingsModal.classList.add("hidden");
};

// Close on clicking outside modal content
settingsModal.onclick = (e) => {
  if (e.target === settingsModal) {
    settingsModal.classList.add("hidden");
  }
};

// 10. Initial Load Setup (Gujarat Titans Fan is Default)
window.onload = () => {
  setPersona("gt-fan");
};
