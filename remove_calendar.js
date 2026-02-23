const fs = require('fs');
const path = require('path');

function removeCalendarMenu(file) {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Regular expression to safely remove the calendar menu item line
  const regex = /<a[^>]*data-widget="calendar"[^>]*>[\s\S]*?<span class="label">달력<\/span>[\s\S]*?<\/a>\s*/g;
  content = content.replace(regex, '');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Removed calendar from', file);
  }
}

['index.html', 'about.html', 'app.html', 'insight/insight.html', 'contact.html', 'privacy.html', 'terms.html', 'checklist.html', 'widget.html', 'scripts/build-posts.js'].forEach(removeCalendarMenu);

const insightDir = path.join(__dirname, 'insight');
if (fs.existsSync(insightDir)) {
  fs.readdirSync(insightDir).forEach(f => {
    if (f.endsWith('.html')) removeCalendarMenu(path.join(insightDir, f));
  });
}
