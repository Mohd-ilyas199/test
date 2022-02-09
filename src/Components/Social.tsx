import React from 'react';
// import {Component, Element, Event, EventEmitter, Prop, h} from '@stencil/core';

import {WebSocialShareDisplayAttributes} from '../types/web-social-share-attributes';
import {WebSocialShareInput, WebSocialShareInputConfig} from '../types/web-social-share-input';

import {shareFacebook} from '../utils/facebook';
import {shareTwitter} from '../utils/twitter';
import {email} from '../utils/email';
import {linkedin} from '../utils/linkedin';
import {pinterest} from '../utils/pinterest';
import {reddit} from '../utils/reddit';
import {whatsapp} from '../utils/whatsapp';
import {copy} from '../utils/copy';
import {hackernews} from '../utils/hackernews';
import {telegram} from '../utils/telegram';



@Component({
  tag: 'web-social-share',
  styleUrl: 'web-social-share.scss',
  shadow: true
})
export className WebSocialShare {
  @Element() el: HTMLElement;

  /**
   * An event triggered when the modal is `closed`
   */
  @Event() closed: EventEmitter<void>;

  /**
   * Trigger the display, or close, of the action sheet which contains the social-share options
   */
  @Prop({mutable: true}) show: boolean;

  /**
   * The share options
   */
  @Prop() share: WebSocialShareInput;

  private refContainer!: HTMLDivElement;

  const hide=()=> {
    if (refContainer) {
      refContainer.classNameList.add('web-social-share-transition-close');

      setTimeout(() => {
        // Reflect css animation speed 400ms, see css
        show = false;
        refContainer.classNameList.remove('web-social-share-transition-close');

        closed.emit();
      }, 200);
    } else {
      // Well we don't find the action sheet, we could mark it as not displayed
      show = false;
      closed.emit();
    }
  }

  const handleShare= (  $event,
    attributes: WebSocialShareDisplayAttributes,
    action: (attributes: WebSocialShareDisplayAttributes) => Promise<void>
  )=> {
    $event.stopPropagation();

    await action(attributes);

    setTimeout( () => hide(), 250);
  }
  
  
const Social = () => {

    return (
      <div
      className={show ? 'web-social-share web-social-share-open' : 'web-social-share web-social-share-close'}
      ref={(el) => (refContainer = el as HTMLDivElement)}>
      <div className="web-social-share-backdrop" onClick={() => hide()}></div>

      <div className="web-social-share-action-sheet" onClick={() => hide()}>
        <div className="web-social-share-action-sheet-container">
          <div className="web-social-share-action-sheet-group">{renderTargets()}</div>
        </div>
      </div>
    </div>

const renderTargets=()=> {
  if (!share?.config) {
    return undefined;
  }

  return share.config.map((config: WebSocialShareInputConfig) => (
    <div className="web-social-share-target">{renderButtons(config)}</div>
  ));
}

const renderButtons=(share: WebSocialShareInputConfig)=> {
  if (share.facebook) {
    return renderButton(share.facebook, 'facebook', shareFacebook, 'Facebook');
  } else if (share.twitter) {
    return renderButton(share.twitter, 'twitter', shareTwitter, 'Twitter');
  } else if (share.email) {
    return renderButton(share.email, 'email', email, 'Email');
  } else if (share.linkedin) {
    return renderButton(share.linkedin, 'linkedin', linkedin, 'Linkedin');
  } else if (share.pinterest) {
    return renderButton(share.pinterest, 'pinterest', pinterest, 'Pinterest');
  } else if (share.reddit) {
    return renderButton(share.reddit, 'reddit', reddit, 'Reddit');
  } else if (share.whatsapp) {
    return renderButton(share.whatsapp, 'whatsapp', whatsapp, 'WhatsApp');
  } else if (share.copy) {
    return renderButton(share.copy, 'copy', copy, 'Copy');
  } else if (share.hackernews) {
    return renderButton(share.hackernews, 'hackernews', hackernews, 'Hacker News');
  } else if (share.telegram) {
    return renderButton(share.telegram, 'telegram', telegram, 'Telegram');
  }

  return undefined;
}

const renderButton=(
  attributes: WebSocialShareDisplayAttributes,
  slotName: 'facebook' | 'twitter' | 'pinterest' | 'linkedin' | 'reddit' | 'email' | 'copy' | 'whatsapp' | 'hackernews' | 'telegram',
  action: (attributes: WebSocialShareDisplayAttributes) => Promise<void>,
  defaultBrandName: string
)=> {
  return (
    <button onClick={($event) => handleShare($event, attributes, action)} className="web-social-share-button">
      <div className="web-social-share-button-icon">
        <slot name={slotName}></slot>
      </div>
      {renderName(attributes, defaultBrandName)}
    </button>
  );
}

const renderName=(displayAttributes: WebSocialShareDisplayAttributes, defaultBrandName: string)=> {
  if (share.displayNames) {
    return (
      <p>
        {displayAttributes && displayAttributes.brandName && displayAttributes.brandName !== ''
          ? displayAttributes.brandName
          : defaultBrandName}
      </p>
    );
  }
};
);

export default Social;