## KaiWeb

### Premise
> For when the internet is both an amazing tool and an amazing distraction.

I'm a software engineer. That means I sometimes get stuck on code problems, and when I'm stuck and frustrated I'm particularly vulnerable to distraction. Enter: StackOverflow's "Hot Network Questions." They have nothing to do with my current problem, and *other peoples' problems are so much more fun to think about than that thing that still isn't frickin' working!* But luckily, I'm a software engineer and get to experience the internet the way I want to. So I deleted the "Hot Network Questions".

Then I thought, what else can I delete or change to make the internet exactly how I want it?

### Results
This is very much a `[WIP]` but here's what I'm doing so far:

- Deleting the above-mentioned "Hot Network Questions"
- Hiding the GitHub `notfications` bell, since I'm an inbox-zero kind of person and I'm on vacation, dangit.

### Installation
- download this repository to your computer
- visit [Chrome's extension page](chrome://extensions/)
- ensure `Developer mode` is checked
- click `Load unpacked extension` and select your local copy of this repo
- you should see ![icon](./icon.png) appear in your toolbar!

### Learnings
- background scripts vs content scripts vs popup scripts
    - popup scripts only run in the context of the extension's popup. That means print statements go to the popup's inspector, not the inspector of the tab you're on.
    - content scripts can directly modify the *content* of the DOM
    - popup scripts can be *injected into* the DOM of the page using `chrome.tabs.executeScript()`. They're useful for time when you want to control the script using configuration or buttons in the popup, rather than running the same way all the time.
- permissions and matching: One can configure which scripts run on which sites using url matching in the `manifest.json`. For right now the classes and ids that I'm keying off of are specific enough that I chose not to do this.
