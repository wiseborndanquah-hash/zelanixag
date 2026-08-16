ZELANIX AG WEBSITE REPLACEMENT PACKAGE
======================================

This package contains complete replacement HTML, CSS, and JavaScript for the
Zelanix Ag website.

FILES INCLUDED
--------------
index.html                 New homepage
services.html              Expanded service descriptions
who-we-serve.html          Replaces Industries
experience.html            New representative experience page
about.html                 Company story and founder profile
insights.html              Replaces the image-only News page
faqs.html                  New FAQ page
contact.html               Expanded contact form
contact-success.html       Form success page
privacy.html               Basic privacy policy
404.html                   Custom page-not-found page
industries.html            Redirects old URL to who-we-serve.html
leadership.html            Redirects old URL to About leadership section
news.html                  Redirects old URL to insights.html
css/styles.css             Complete responsive styling
js/script.js               Accessible mobile navigation and form setup warning
robots.txt                 Search crawler instructions
sitemap.xml                Search sitemap

INSTALLATION
------------
1. Make a complete backup of the current website.
2. Keep the current images folder. This code expects:
       images/zelanixmodifiedlogo.png
       images/GR1.jpg
       images/INSEC.jpeg
3. Upload all files in this package to the website root.
4. Allow the new css and js folders to replace the current versions.
5. Test every page on desktop and mobile.
6. Submit sitemap.xml in Google Search Console after deployment.

IMPORTANT: CONTACT FORM
-----------------------
Open contact.html and find:

    https://formspree.io/f/YOUR_FORM_ID

Replace YOUR_FORM_ID with the actual form ID supplied by Formspree.
The JavaScript intentionally prevents submission while the placeholder remains.

FOUNDER PHOTO
-------------
The Home and About pages contain a visible founder-photo placeholder.
Replace each placeholder div with an image such as:

    <img src="images/wiseborn-danquah.jpg"
         alt="Wiseborn B. Danquah, Ph.D., Founder and Principal Consultant">

For best results, use a professionally lit image at least 900 pixels wide.

IMAGE CHANGES
-------------
The package reuses two image names found in the current website:
GR1.jpg and INSEC.jpeg. Replace those files in the images folder with
appropriately licensed photographs while keeping the filenames, or change
the corresponding background-image declarations in css/styles.css.

SEARCH AND REDIRECTS
--------------------
The old Industries, Leadership, and News filenames are retained as redirect
pages so existing bookmarks and links do not immediately break.

LEGAL NOTE
----------
The included privacy policy is a practical starter, not legal advice.
Update it if analytics, advertising, cookies, CRM integrations, or additional
data-processing services are added.
