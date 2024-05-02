"use client";

import "../../app/globals.css";
import { redirect } from "next/navigation";
import React from "react";
import { Card, List } from "antd";

const data = [
  {
    title: "<audio> elements must have a captions <track>",
    content: "Without a caption for an audio file, deaf users are not able to know the meaningful information that the audio conveys such as identifying who is speaking, its dialogue, and non-speech information conveyed through sound such as musical cues or sound effects. Captions provide the part of the content that is available via the audio track.",
  },
  {
    title: "<blink> elements are deprecated and must not be used",
    content: "As the name suggests, blink tags cause content to flash. Though you may like the effect, blinking text can be difficult to read, and blinking objects (links, buttons, etc.) can be difficult to activate, especially for users with imprecise or limited dexterity.",
  },
  {
    title: "<dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, or <template> elements",
    content: "Screen readers have a specific way of announcing definition lists. When such lists are not properly marked up, this creates the opportunity for confusing or inaccurate screen reader output.",
    content: "A definition list is used to provide the definitions of words or phrases. The Definition List is marked up using the dl element. Within the list, each term is put in a separate dt element, and its definition goes in the dd element directly following it.",
  },
  {
    title: "<dt> and <dd> elements must be contained by a <dl>",
    content: "A definition list item must be wrapped in parent dl elements, otherwise it will be invalid. A definition list must follow a specific hierarchy. A list is defined using the dl element. What follows are alternating sets of dt and dd elements, starting with the dt element. dt elements define a term while dd elements denote a term's description. Each set of dt elements must have a corresponding set of dd elements. Only dt and dd elements are allowed in definition list. If this hierarchy is not followed, the list will be invalid.",
  },
  {
    title: "<html> element must have a lang attribute",
    content: "When configuring a screen reader, users select a default language. If the language of a webpage is not specified, the screen reader assumes the default language set by the user. Language settings become an issue for users who speak multiple languages and access website in more than one language. It is essential to specify a language and ensure that it is valid so website text is pronounced correctly.",
  },
  {
    title: "<html> element must have a valid value for the lang attribute",
    content: "When configuring a screen reader, users select a default language. If the language of a webpage is not specified, the screen reader assumes the default language set by the user. Language settings are an issue for users who speak multiple languages and access website in more than one language. It is essential to specify a language and ensure that it is valid so website text is pronounced correctly.",
  },
  {
    title: "<html> elements with lang and xml:lang must have the same base language",
    content: "When configuring a screen reader, users select a default language. If the language of a webpage is not specified, the screen reader assumes the default language set by the user. Multiple languages are an issue for users who speak and access websites in multiple languages. It is essential to specify a default language and ensure that it is valid for screen readers to function correctly.",
  },
  {
    title: "<li> elements must be contained in a <ul> or <ol>",
    content: "For a list to be valid, it must have both parent and child elements. Parent elements can either be a set of ul tags or a set of ol tags. Child elements must be declared inside of these tags using the li tag. Screen readers notify users when they come to a list, and tell them how many items are in a list. Announcing the number of items in a list and the current list item helps listeners know what they are listening to, and what to expect as they listen to it.",
  },
  {
    title: "<marquee> elements are deprecated and must not be used",
    content: "The marquee element creates scrolling text that is difficult to read and click on. Beyond that, it can be distracting to viewers, especially to those with low vision, cognitive disabilities, or attention deficits. People with attention deficits or cognitive disabilities could become distracted by content that scrolls. If scrolling content contains links, people with limited fine motor abilities may not be able to click on the links accurately. Users with visual impairments may not be able to see the scrolling text with enough acuity to know what the content says.",
  },
  {
    title: "<object> elements must have alternate text",
    content: "Screen readers have no way of translating non-text content into text announced to users. Instead, they read out alternative text. For screen reader users to obtain the information contained in embedded object elements which must contain short, descriptive alternative text. The object element defines an embedded object within a document. It is used to embed multimedia (audio, video, applets, etcetera.) or another web page into the document. The object element needs a text alternative so that users of screen readers know the contents of the object.",
  },
  {
    title: "<ul> and <ol> must only directly contain <li>, <script> or <template> elements",
    content: "Screen readers have a specific way of announcing lists. This feature makes lists clearer to understand, but will only work if lists are properly structured. When content elements other than list items are contained within a set of list elements, screen readers cannot inform the listener that they are listening to items within the list.",
  },
  {
    title: "<video> elements must have a <track> for captions",
    content: "If a video has no caption, deaf users have limited or no access to the information contained in it. Even if a captions track is available, ensure that it contains all meaningful information in the video, not just dialogue.",
  },
  {
    title: "<video> elements must have an audio description <track>",
    content: "While blind people can hear the audio content of videos with no issue, they miss visual aspects of films such as facial expressions and scenes. Many things happen in movies that are completely visual, with no auditory component. For example, a person can make a facial expression, but not say any words. The camera can show a mountain scene, but no one in the movie says ¨this is a mountain scene.¨ There is much visual information that blind people miss completely without audio. Audio descriptions are the solution to make visual information in movies accessible to blind people.",
  },
  {
    title: "accesskey attribute value must be unique",
    content: "Specifying a accesskey attribute value for some part of a document allows users to quickly activate or move the focus to a specific element by pressing the specified key (usually in combination with the alt key). Duplicating accesskey values creates unexpected effects that ultimately make the page less accessible.",
  },
  {
    title: "Active <area> elements must have alternate text",
    content: "Screen readers have no way of translating images into words. It is important that all images, including image maps, have alt text values. Screen readers typically announce the filename of the image if alternative text is missing. Filenames do not adequately describe images and are not helpful to screen reader users.",
  },
];
const panelStyle = {
  //     ved ikke helt hvordan det fungere endnu, men tror det er vigtigt
};

const App = () => (
  <List
    grid={{
      gutter: 24,
      column: 4,
      xs: 1,
      sm: 1,
      md: 2,
      lg: 2,
      xl: 2,
      xxl: 3,
    }}
    dataSource={data}
    renderItem={(item) => (
      <List.Item style={panelStyle}>
        <a href="x" target="blank_">
          <Card title={item.title} content={item.content}>
            {item.content}
          </Card>
        </a>
      </List.Item>
    )}
  />
);
export default App;
