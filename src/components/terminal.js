import React, { useState, useRef, useEffect } from "react";
import '../Design/terminal.css'; 

function Terminal() {
  const intro = [
    "Welcome to Naman's terminal v1.0.0",
    "Type `help` to see available commands.",
    "Type `theme matrix` to enter the matrix."
  ];

  const [history, setHistory] = useState(intro);
  const [input, setInput] = useState("");
  const [theme, setTheme] = useState("default");

  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  
  // Track previous history length to prevent scroll on load
  const lastHistoryLength = useRef(intro.length);

  useEffect(() => {
    // Only scroll if new lines were ADDED (prevents scroll on load)
    if (history.length > lastHistoryLength.current) {
      if (bottomRef.current) {
        bottomRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
    // Update ref for next render
    lastHistoryLength.current = history.length;
  }, [history]);

  // Focus input when clicking anywhere on the terminal
  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const commands = {
    help: [
      "Available commands:",
      "• whoami    : About me",
      "• skills    : Tech stack overview",
      "• projects  : Key projects built",
      "• contact   : Social links & email",
      "• theme     : Switch theme (default | matrix | solarized)",
      "• clear     : Clear terminal history"
    ],
    whoami: [
      "User: Naman Srivastava",
      "Role: Software Developer",
      "Mission: Building scalable backend systems & cloud solutions."
    ],
    skills: [
      "----------------------------------",
      " LANGUAGES : C++, Python, JavaScript",
      " BACKEND   : Node.js, Flask, Express",
      " FRONTEND  : React.js, HTML/CSS",
      " CLOUD     : AWS (EC2, S3, Lambda)",
      " DATABASE  : MongoDB, MySQL",
      "----------------------------------"
    ],
    projects: [
      "1. RouteGuard",
      "   - Real-time safety & loitering detection system.",
      "2. Anonymous File Share",
      "   - Secure file sharing without login (GCP/Flask).",
      "3. ML Pipelines",
      "   - End-to-end supervised/unsupervised learning models."
    ],
    contact: [
      "GitHub   : github.com/namansrivastavaaa",
      "LinkedIn : linkedin.com/in/namansrivastavaaa",
      "Email    : namansrivastava1608@gmail.com"
    ]
  };

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const raw = input.trim();
      const parts = raw.split(" ");
      const cmd = parts[0].toLowerCase();
      const arg = parts[1]?.toLowerCase();
      
      let output = [];

      // CLEAR
      if (cmd === "clear") {
        setHistory(intro);
        setInput("");
        return;
      }

      // THEME SWITCHING
      if (cmd === "theme") {
        if (["default", "matrix", "solarized"].includes(arg)) {
          setTheme(arg);
          output = [`>> System theme changed to: ${arg}`];
        } else {
          output = [
            "Usage: theme <name>",
            "Available themes: default, matrix, solarized"
          ];
        }
      } 
      // STANDARD COMMANDS
      else if (commands[cmd]) {
        output = commands[cmd];
      } 
      // UNKNOWN COMMAND
      else if (raw !== "") {
        output = [`Command not found: '${raw}'. Type 'help' to see list.`];
      }

      // Add user command + output to history
      if (raw !== "") {
        setHistory((prev) => [...prev, `naman@portfolio:~$ ${raw}`, ...output]);
      } else {
        setHistory((prev) => [...prev, `naman@portfolio:~$`]);
      }
      
      setInput("");
    }
  };

  return (
    <div className={`terminal-card theme-${theme}`} onClick={handleTerminalClick}>
      <div className="terminal-header">
        <span className="dot red" />
        <span className="dot yellow" />
        <span className="dot green" />
        <span className="terminal-title">naman@portfolio — -zsh</span>
      </div>

      <div className="terminal-body">
        {history.map((line, idx) => (
          <div key={idx} className="terminal-line">
            {line}
          </div>
        ))}

        <div className="terminal-input">
          <span className="prompt">naman@portfolio:~$</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            autoComplete="off"
            spellCheck="false"
          />
        </div>
        {/* Dummy div to scroll to */}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}

export default Terminal;