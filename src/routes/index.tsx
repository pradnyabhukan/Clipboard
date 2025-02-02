import { Title } from "@solidjs/meta";
import bgImg from '../images/bg-header-desktop.png';
import logo from '../images/logo.svg';
import iconBlacklist from "../images/icon-blacklist.svg";
import iconText from "../images/icon-text.svg";
import iconPreview from "../images/icon-preview.svg";

import google from "../images/logo-google.png";
import hp from "../images/logo-hp.png";
import ibm from "../images/logo-ibm.png";
import microsoft from "../images/logo-microsoft.png";
import vector from "../images/logo-vector-graphics.png";

import fb from "../images/icon-facebook.svg";
import insta from "../images/icon-instagram.svg";
import twitter from "../images/icon-twitter.svg";

import TrackSnippets from "~/components/TrackSnippets";
import imageDevices from "../images/image-devices.png";

export default function Index() {
  return (
    <main>
      <img class="bg-header" src={bgImg} />
      <img class="logo-header" src={logo} />
      <div class="hero">
        <h1 class="heading">A History of everything you copy</h1>
        <p class="text">Clipboard allows you to track and organize everything you copy. 
        Instantly access your clipboard on all your devices.</p>
      </div>
      <div class="buttons">
        <button class="button ios">Download for ios</button>
        <button class="button mac">Download for mac</button>
      </div>
      <div class="hero-2">
        <h1 class="heading-2">Keep track of your snippets</h1>
        <p class="text-2">Clipboard instantly stores any item you copy in the cloud, 
        meaning you can access your snippets immediately on all your devices. 
        Our Mac and iOS apps will help you organize everything.</p>
      </div>
      <TrackSnippets/>
      <div class="hero-2">
        <h1 class="heading-2">Access Clipboard anywhere</h1>
        <p class="text-2">Whether you’re on the go, or at your computer, 
        you can access all your Clipboard snippets in a few simple clicks.</p>
      </div>
      <img class="image-devices" src={imageDevices} />
      <div class="hero-2">
        <h1 class="heading-2">Supercharge your workflow</h1>
        <p class="text-2">We’ve got the tools to boost your productivity.</p>
      </div>
      <div class="features">
        
        <div class="hero-3">
        <img class="features-icon" src={iconBlacklist} /> 
          <h1 class="heading-3">Create blacklists</h1>
          <p class="text-3">Ensure sensitive information never makes its way 
          to your clipboard by excluding certain sources.</p>
        </div>
        
        <div class="hero-3">
        <img class="features-icon" src={iconText} />
          <h1 class="heading-3">Plain text snippets</h1>
          <p class="text-3">Remove unwanted formatting from copied text for a consistent look.</p>
        </div>
        
        <div class="hero-3">
        <img class="features-icon" src={iconPreview} />
          <h1 class="heading-3">Sneak preview</h1>
          <p class="text-3">Quick preview of all snippets on your Clipboard for easy access.</p>
        </div>
      </div>

      <div class="companies">
        <img class="company-icon" src={google} /> 
        <img class="company-icon" src={ibm} /> 
        <img class="company-icon" src={microsoft} /> 
        <img class="company-icon" src={hp} /> 
        <img class="company-icon" src={vector} /> 
      </div>

      <div class="hero-2">
        <h1 class="heading-2">Clipboard for iOS and Mac OS</h1>
        <p class="text-2">Available for free on the App Store. Download for Mac or iOS, 
        sync with iCloud and you’re ready to start adding to your clipboard.</p>
      </div>
      <div class="buttons">
        <button class="button ios">Download for ios</button>
        <button class="button mac">Download for mac</button>
      </div>

      <div class="footer">
        <img class="logo-icon" src={logo} />
        <div class="content">
          <p class="text-4">FAQs</p>
          <p class="text-4">Contact Us</p>
        </div>
        <div class="content">
          <p class="text-4">Contact Us</p>
          <p class="text-4">Press Kit</p>
        </div>
        <div class="content">
          <p class="text-4">Install Guide</p>
        </div>
        <div class="icons">
          <img class="footer-icon" src={fb} />
          <img class="footer-icon" src={twitter} />
          <img class="footer-icon" src={insta} />
        </div>
      </div>

    </main>
  );
}

