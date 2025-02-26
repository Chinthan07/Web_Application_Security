//1. Log the current URL and query parameters

const currentURL = window.location.href;
console.log("Current URL:", currentURL);

const queryParams = new URLSearchParams(window.location.search);
queryParams.forEach((value, key) => {
  console.log(`Query Parameter: ${key} = ${value}`);
});

//Attackers might use query parameters to pass malicious URLs or data.
//For example, a query parameter ?redirect=malicious-site.com could redirect users to a phishing website.


//2.  Write a script to log the hostname, protocol, and pathname of the current page using window.location.
//Explain how attackers might manipulate these properties to perform malicious redirects.
console.log("Hostname:", window.location.hostname);
console.log("Protocol:", window.location.protocol);
console.log("Pathname:", window.location.pathname);

//Attackers can manipulate window.location using JavaScript injection or social engineering techniques to redirect users to phishing sites.
//Malicious scripts can alter the URL to appear trustworthy while secretly leading users to a harmful destination.

//3.Write a script that uses window.location to redirect users to another webpage.
//Add a condition to restrict redirects only to trusted domains. Discuss the implications of open redirects in phishing attacks.
function redirectTo(url) {
  const trustedDomains = ["example.com", "trusted-site.com"];
  let parsedUrl = new URL(url, window.location.origin);
  if (trustedDomains.includes(parsedUrl.hostname)) {
      window.location.href = url;
  } else {
      console.warn("Untrusted domain: Redirect blocked!");
  }
}

//Open redirects can be exploited in phishing attacks where attackers trick users into clicking
// a link that appears legitimate but actually redirects them to a fake login page.

//4. Write a script to log the number of pages visited in the current session using window.history. 
//Discuss potential privacy concerns if malicious scripts attempt to track browser history.

if (!sessionStorage.pageCount) {
  sessionStorage.pageCount = 0;
}
sessionStorage.pageCount++;
console.log("Pages visited in this session:", sessionStorage.pageCount);

//Malicious scripts can track user behavior, infer browsing patterns,
// and gather sensitive data for profiling, violating privacy.

//5. Write a script using window.navigator to display the user agent string. 
// Modify the script to identify and log whether the browser is Google Chrome, Mozilla Firefox, or an automation tool.

console.log("User Agent:", window.navigator.userAgent);

if (navigator.userAgent.includes("Chrome")) {
  console.log("Browser: Google Chrome");
} else if (navigator.userAgent.includes("Firefox")) {
  console.log("Browser: Mozilla Firefox");
} else if (navigator.userAgent.includes("HeadlessChrome")) {
  console.log("Automation tool detected!");
} else {
  console.log("Browser not identified");
}

//6. Write a script to log the user's screen width and height using window.screen. 
// Explain how attackers might use screen dimensions to craft phishing attacks.
console.log("Screen Width:", window.screen.width);
console.log("Screen Height:", window.screen.height);

//Attackers may use screen dimensions to optimize phishing attacks for specific devices,
// ensuring fake login pages appear legitimate on different screens.

//7.Write a script to open a new popup window using window.open. 
//Discuss the risks associated with popup-based attacks and suggest mitigation strategies.
let popup = window.open("https://google.com", "popup", "width=400,height=400");
//Popup windows can be used for phishing, clickjacking, or hiding malicious content.
//Mitigations include blocking popups by default and using Content Security Policy (CSP) rules

//8.Write a script to log the domain and origin of the current page using window.location.
//Explain how these properties are relevant in CORS security.
console.log("Domain:", document.domain);
console.log("Origin:", window.location.origin);
//These properties are critical in Cross-Origin Resource Sharing (CORS). 
//Attackers can exploit misconfigured CORS policies to steal sensitive data from trusted domains.

//9.Write a script using window.setTimeout that simulates a login timeout after 10 seconds of inactivity.
//Enhance the script to reset the timer whenever the user interacts with the page.

let timeout;

function resetTimer() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        alert("Session expired due to inactivity.");
    }, 10000);
}

document.addEventListener("mousemove", resetTimer);
document.addEventListener("keypress", resetTimer);

resetTimer();


//10.Write a script that checks if the current URL uses "https" using window.location.
//Alert the user if the page is not secure and suggest measures to handle such scenarios.
if (window.location.protocol !== "https:") {
  alert("Warning: You are on an insecure page. Avoid entering sensitive information.");
}

//11. Write a script to open a new window and then close it using window.close.
//Discuss scenarios where malicious scripts might misuse this functionality to disrupt user experience.
let newWindow = window.open("https://example.com", "_blank");
setTimeout(() => {
    if (newWindow) newWindow.close();
}, 5000);

//Malicious scripts may repeatedly open and close windows, 
//creating a denial-of-service (DoS) effect or tricking users into believing an action was completed.

//12.Write a script to scroll the webpage to the top using window.scrollTo.
//Modify the script to scroll to a specific element on the page.
//Discuss how attackers might use scrolling to hide malicious content or overlays.

// Scroll to top
window.scrollTo({ top: 0, behavior: "smooth" });

// Scroll to a specific element
function scrollToElement(id) {
    let element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
}

//Attackers use forced scrolling to hide malicious elements,
//such as overlays that obscure warning messages or security indicators.


//13. Write a script to retrieve the current webpage's title using document.title and log it to the console.
//Modify the title to include a security warning if it doesn't already contain "Secure." Explain how attackers
//might manipulate the document title for phishing or social engineering attacks.
console.log("Page Title:", document.title);

if (!document.title.includes("Secure")) {
    document.title = "Secure | " + document.title;
}
//Phishing sites may manipulate document titles to impersonate legitimate websites,
//making fake login pages appear authentic.
