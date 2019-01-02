import React from "react";

export const packagingOptions = (
  <ul>
    <li>
      <input id="sig" type="radio" checked={true} />
      <label for="sig">Signature Packaging</label>
      <p>
        Delivered in a MR PORTER signature white box that’s FSC-certified and
        recyclable
      </p>
      <p>Free</p>
    </li>
    <li>
      <input id="basic" type="radio" />
      <label for="basic">Basic Packaging</label>
      <p>
        Your order will be delivered in a FSC-certified, recyclable, non-branded
        box
      </p>
      <p>Free</p>
    </li>
  </ul>
);

export const completedPackagingOptions = (
  <ul>
    <li>Signature Packaging</li>
  </ul>
);
