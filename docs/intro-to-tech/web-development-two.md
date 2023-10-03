---
id: 3
sidebar_position: 2
---


# Week 4 - The World Wide Web

## Pre-Class Preparation

1. Please read the rest of this web page as preperation for our next class.
2. Please watch this video: https://www.youtube.com/watch?v=7_LPdttKXPc

## How the Web Works

At it's core, the internet is just a bunch of computers connected together. 

Now obviously we can't physically connect all of our computers together with one mega cable, so we rely on an internet connection to keep all of our computers connected. Companies like AT&T, Spectrum, Starlink, etc. all exist to maintain the infrastructure (i.e. miles and miles of underground cables) so we don't have to.

The ONLY WAY that the internet works is if all of these connected computers speak the same language. And thankfully they all do! 

<details>
    <summary>
        Tell me more... 🧐
    </summary>
    For those that are interested, the internet leverages the Hypertext Transfer Protocol Secure (https). That's why you often see `https://` at the beginning of urls. Additionally, Transmission Control Protocol and Internet Protocol are communication protocols that define how data should travel across between computers. Anyways... feel free to promptly forget this infromation 😶‍🌫️
</details>

<br />

### Clients and Servers

Some devices, like the one you're reading this on, are referred to as "clients." These are typically used by people using an app or a web browser from a device such as a phone or tablet.

Other devices are referred to as "servers." Servers are computers dedicated to storing data or processing information, and are (sometimes) in super secure, climate controlled underground bunkers that can withstand power outages or even a nuclear strike from Russia ☠️. They don't usually need a human interface like a screen or keyboard. You've probably seen pictures of servers like this:

<img height="250" width="250" src="https://servers.asus.com/upload/images/2023/01-10/962b7173e55240c181f3ca512c1ec25d.jpg" />

Believe it or not this is actually pretty accurate!

### Your HTML site
We can see this client server model in action when we load our websites into a browser!

<img width="500" src="/windows-browser-file.png" />

When we open our HTML files on our local computers, they pull up in a browser. But what is actually happening? 🤔

If we look at the address bar (or url) of our browser, you'll see something like this: `file:///C:/Users/user/Documents/hello.html`. Now that we know about "clients" and "servers" we can understand a little bit more about what's happening here.

The web browsers (our "client") is requesting a file that is on our computer (our "server"). The file it wants is `hello.html`, and it knows the exact location (in this example, in the `C:/` drive inside the `user/Documents` folder). Our computer happens to have a file at that specific location, so it returns it to the web browser, which then uses it to create our web page. That's [pretty neat!](https://www.youtube.com/watch?v=OXZt4-LTtHw)

The same things happens whenever we use the internet, but instead of making requests to our own computer, we're making requests to other computers that are also connected to the internet.

### DNS (Domain Name Servers)

Please watch this video: https://www.youtube.com/watch?v=2WdF1zT01HY

Domain Name Servers exist to translate computer internet protocol (IP) addresses in words that are easier for humans to understand.

### Project

Deploy your web site to the world! You can do so by following these steps:

1. Create a [Github](https://github.com/) account.
2. Follow the instructions at https://pages.github.com/. 
3. Make sure you select "Project Site"

<img width="500" src="/github01.png" />
<br />

4. Make sure you select "Start from scratch"

<img width="500" src="/github02.png" />
<br />

5. Create a repository. Name it `about-me`.
6. Make sure you check "Add a README file"

<img width="450" src="/github03.png" />
<br />

7. Instead of "create new files" choose "upload files"
<img width="250" src="/github04.png" />
<br />

8. Upload your html file
9. Click commit new file
10. From the settings tab, select "main" and hit save
<img width="500" src="/github05.png" />
<br />

11. http://username.github.io/repository where `username` is your Github username and `repository` is the name of your repository `about-me`
12. Your site is live!
