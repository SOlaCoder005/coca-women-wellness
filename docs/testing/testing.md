TESTING.MD FILE

# List of Contents

## [Overview](#Overview)

### 1. Responsiveness issues with CWW site’s initial design and structure

### 2. Methods undertaken to assess the live CWW site’s structure and responsiveness

### 3. Users’ feedback on their experience using the CWW website



## Overview

This document Is an extension of ‘6. Testing’ section in the Coca Women Wellness repository. The document will provide information on factors that contributed to the development of the Coca Women Wellness website: 

- Responsiveness issues with CWW site’s initial design and structure

- Methods undertaken to assess the live CWW site’s structure and responsiveness

- Users’ feedback on their experience using the CWW website

## 1. Responsiveness issues with CWW site’s initial design and structure

### **Issue:**

Although the initial wireframes for the CWW presented a feasible concept, execution of the plans proved to raise multiple issue. 

Once creating the initial pages, responsiveness testing identified that the structure was severely limited in terms of responsiveness. For instance: 

- While structure of the site was functional on **_desktop viewports_**, the structure of the site was not functional on **_smaller devices_** when rotated both horizontally and vertically. 

Through screen rotation, as well as reducing and expanding screen size, the following issues arose: 

- The text and image elements would not adapt appropriately to the changing screen widths and sizes. 

- Similarly, when reducing the screen width, elements such as the form would spill over the footer and header sections. Further, icons on the playlist page would overlay the previous ones.

These issues persisted even after applying media queries to the website. Visual examples of the issues mentioned can be viewed [here](). 

### **Solution:** 

As evidence in the live CWW site, the issues mentioned above were resolved. However, there was need to restructure the site. For this reason, the live CWW structure differs from the initial wireframes. 

In more detail, the site structure was changed by applying a grid method to form the foundational structure of the CWW site. This method increased the site’s degree of responsivity to the changing screen widths and lengths when accessed on varying devices.

## 2. Methods undertaken to assess the live CWW site’s structure and responsiveness

In addition to altering the CWW site’s structure, [Responsively](https://responsively.app/download) application [Google (Chrome) Development Tools](https://developer.chrome.com/docs/devtools/open/). Which supported the consistent assessment of the degree to which website is responsive on various device sizes and screen orientations. This is demonstrated in the visuals below: 

 ![]()
 ![]()
 ![]()
 ![]()
 ![]()
 ![]()


## 3. Users’ feedback on their experience using the CWW website

As part of additional testing of the CWW site, the users that participated in earlier stages of target audience research (see ‘2. User Stories’ of the [README.md file](https://github.com/SOlaCoder005/coca-women-wellness/blob/master/README.md)) to test their access to thee site and provide feedback on their user experience when engaging with the content. 

Specifically the users were asked if they could: 

1. Confirm if there are any pages that don’t work?

2. Take a mobile screenshot of their favourite page on the site and send a reply via Whatsapp? 

3.  Confirm what type of phone they use (e.g. IPhone7, Samsung Galaxy S4)?

4. Not fill the form at the end. 

As the CWW form uses: https://formdump.codeinstitute.net as the post URL, and in line with policies around data protection (e.g. GDPR practices), it was best for the users not to submit their personal information. Further, the form had already been tested and confirmed that it works (see ‘4.6 Page: CONNECT’ of the [README.md file](https://github.com/SOlaCoder005/coca-women-wellness/blob/master/README.md)).

The users’ feedback can be found below: 

- [User A](/assets/images/testing-evidence/userafeedback.PNG) 
- [User R](/assets/images/testing-evidence/userrfeedback.PNG) 
- [User AM](/assets/images/testing-evidence/useramfeedback.PNG) 
- [User L](/assets/images/testing-evidence/userlfeedback.PNG) 

Based on the feedback;

1. All pages appear to function as expected.

2. The **_HOME, ABOUT and RECIPES_** pages were favoured the most. The **_PLAYLISTS_** page was also popular. 

3. The CWW website is accessible on multiple devices, including buyt not limited to: 

    - Samsung Series(S10) 
    - iPhone (XR and 11)
    - Oppo Reno (Z and 4) 
