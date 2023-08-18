---
sidebar_position: 6
---

# Hyper Text Markup Language (HTML)

_30 min read - Last Updated: August 2023_

## What is HTML

HTML is the World Wide Web's core markup language.

<details>
    <summary>
        What's a markup language?
    </summary>
    A markup language is a computer language that uses tags to define elements within a document. It aims to be human-readable, meaning markup files contain standard words, rather than typical programming syntax.
</details>

<br />

Please read section 1.10 from the HTML specification (you can stop once you get to 1.10.0):

📖 https://html.spec.whatwg.org/multipage/introduction.html#a-quick-introduction-to-html 📚

<details>
    <summary>
        ❓Questions to answer from the reading❓
    </summary>
    <ul>
        <li>How are tags nested?</li>
        <li>Elements can have what?</li>
        <li>What do attributes do?</li>
        <li>What does DOM stand for? What is it?</li>
    </ul>
</details>

## Elements

🤯 Whoa that's [a lot of elements](https://www.w3schools.com/TAGS/default.asp)!

Luckily, we don't have to memorize it. While we'll become quickly familar with a lof of the elements, we can always do a quick Google search to find what we're looking for ("how do I make a link again?").

Please read section 3.2.1 from the HTML specification:

📖 https://html.spec.whatwg.org/multipage/dom.html#semantics-2 📚

<details>
    <summary>
        ❓Questions to answer from the reading❓
    </summary>
    <ul>
        <li>What does "semantics" mean?</li>
    </ul>
</details>

## CSS

By adding a `<style></style>` tag to our HTML documents, we can add tweak the appearance of our html. In between the opening and closing `style` tags we write our CSS -- Cascading Style Sheets. CSS is programming language that exists to make HTML look pretty. It looks like this:

```
<style>
    p {
        color: red;
    }
</style>
```

The above snippet makes all of our document's paragraphs red 🙌. There are [a lot of different CSS properties](https://www.w3schools.com/cssref/index.php) we can use! But don't worry, no memorization required. 

## Final Prep

On your computer, using a text editor (such as TextEdit or Notepad) create a new file and save it as `index.html`. Be sure it has the `.html` file extension instead of `.txt`.

Copy and paste the following into you editor:

```
<h1>Hello world 👋</h1>
<style>
    h1 {
        color: tomato;
    }
</style>
```

What else could you add to this document??

Once created and saved, double clicking that file should open it your web browser! Refresh the browser to any changes you make. If you ran into any difficulties, no worries! We'll help solidy understanding in class. Can't wait? Reach out to us in Discord!

## 💪 Exercise

_1 - 2 hours_

> **Note**
> These exercises are not required before class. However, if you'd like to give them a go please do!

### Project

Create an "About Me" page.

- Your page should contain (as a minimum):
    - An image of you (or one that represents you)
    - A summary of yourself
    - A title (Text that appears in the browser window's tab)
    - 3 external links
    - A list of facts about you
    - Anything else you want to add -- be creative!