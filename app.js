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

  if (apiKey) {
    // MAKE REAL LIVE API CALL TO GEMINI 1.5 FLASH
    const systemPrompt = context.systemPrompt;
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    
    const payload = {
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `System context for your persona:\n${systemPrompt}\n\nUser Question: ${query}\n\nAnswer the question accurately, focusing on Tata IPL. Keep it engaging, in character, and concise.`
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
          answer = `As a dedicated Titans fan, I've checked the latest stats for "${query}". While we process live matches, Gill remains our top run scorer and Ahmedabad looks set for a spin battle next game!`;
        } else if (currentPersona === "fantasy") {
          answer = `Analyzing fantasy statistics for "${query}". Pitch indices show optimal balance for seam-bowling variance. I recommend reviewing player form and target picks before lineup locking!`;
        } else if (currentPersona === "casual") {
          answer = `Wow! That's a super cool query about "${query}". The match is extremely heated, and you won't want to miss Gill's massive boundary streak coming up next!`;
        } else {
          answer = `Regression analysis modeling for "${query}" completed. Variance metrics are well within standard parameters. Ahmedabad's middle-over spin friction coefficient remains at 0.78.`;
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
