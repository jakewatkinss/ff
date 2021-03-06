/*
 * Copyright (c) 2015-present, Parse, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 */

const encoded = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '/': '&#x2F;',
  "'": '&#x27;',
  '"': '&quot;',
};

export default function escape(str: string): string {
  return str.replace(/[&<>/'"]/g, char => {
    return encoded[char];
  });
}
