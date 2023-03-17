import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

export const messages: any = {
  fetchLatestMessages: [
    {
      messageId: '8765390937907625384',
      text: 'Hi, there!',
      datetime: '2023-03-16T00:10:28.245Z',
      userId: 'Joyse',
    },
    {
      messageId: '9845380937907670972',
      text: 'Good morning!',
      datetime: '2023-03-16T00:10:41.762Z',
      userId: 'Russell',
    },
    {
      messageId: '9824230937098237564',
      text: 'Thank you!',
      datetime: '2023-03-16T00:10:54.926Z',
      userId: 'Sam',
    },
  ],
};

/**
 * Finds a nested Component by its selector, e.g. `app-example`.
 * Throws an error if no element was found.
 *
 * @param fixture Fixture of the parent Component
 * @param selector Element selector, e.g. `app-example`
 */
export function findComponent<T>(
  fixture: ComponentFixture<T>,
  selector: string
): DebugElement {
  return queryByCss(fixture, selector);
}

export function findComponents<T>(
  fixture: ComponentFixture<T>,
  selector: string
): DebugElement[] {
  return fixture.debugElement.queryAll(By.css(selector));
}

/**
 * Finds a single element inside the Component by the given CSS selector.
 * Throws an error if no element was found.
 *
 * @param fixture Component fixture
 * @param selector CSS selector
 */
export function queryByCss<T>(
  fixture: ComponentFixture<T>,
  selector: string
): DebugElement {
  const debugElement = fixture.debugElement.query(By.css(selector));
  // Fail on null so the return type is always DebugElement.
  if (!debugElement) {
    throw new Error(`queryByCss: Element with ${selector} not found`);
  }
  return debugElement;
}

/**
 * Returns a selector for the `data-testid` attribute with the given attribute value.
 *
 * @param testId Test id set by `data-testid`
 *
 */
export function testIdSelector(testId: string): string {
  return `[data-testid="${testId}"]`;
}

/**
 * Finds an element inside the Component by the given `data-testid` attribute.
 * Throws an error if no element was found.
 *
 * @param fixture Component fixture
 * @param testId Test id set by `data-testid`
 *
 */
export function findEl<T>(
  fixture: ComponentFixture<T>,
  testId: string
): DebugElement {
  return queryByCss<T>(fixture, testIdSelector(testId));
}

/**
 * Dispatches a fake event (synthetic event) at the given element.
 *
 * @param element Element that is the target of the event
 * @param type Event name, e.g. `input`
 * @param bubbles Whether the event bubbles up in the DOM tree
 */
export function dispatchFakeEvent(
  element: EventTarget,
  type: string,
  bubbles: boolean = false
): void {
  const event = document.createEvent('Event');
  event.initEvent(type, bubbles, false);
  element.dispatchEvent(event);
}

/**
 * Enters text into a form field (`input`, `textarea` or `select` element).
 * Triggers appropriate events so Angular takes notice of the change.
 * If you listen for the `change` event on `input` or `textarea`,
 * you need to trigger it separately.
 *
 * @param element Form field
 * @param value Form field value
 */
export function setFieldElementValue(
  element: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
  value: string
): void {
  element.value = value;
  // Dispatch an `input` or `change` fake event
  // so Angular form bindings take notice of the change.
  const isSelect = element instanceof HTMLSelectElement;
  dispatchFakeEvent(
    element,
    isSelect ? 'change' : 'input',
    isSelect ? false : true
  );
}

/**
 * Sets the value of a form field with the given `data-testid` attribute.
 *
 * @param fixture Component fixture
 * @param testId Test id set by `data-testid`
 * @param value Form field value
 */
export function setFieldValue<T>(
  fixture: ComponentFixture<T>,
  testId: string,
  value: string
): void {
  setFieldElementValue(findEl(fixture, testId).nativeElement, value);
}
