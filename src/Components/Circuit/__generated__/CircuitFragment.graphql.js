/**
 * @generated SignedSource<<b70f93e9f59f887f7c20a554ce36e828>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type CircuitFragment$fragmentType: FragmentType;
export type CircuitFragment$ref = CircuitFragment$fragmentType;
export type CircuitFragment$data = {|
  +circuit: ?{|
    +circuitName: ?string,
    +location: ?{|
      +long: ?string,
      +lat: ?string,
      +locality: ?string,
      +country: ?string,
    |},
  |},
  +$fragmentType: CircuitFragment$fragmentType,
|};
export type CircuitFragment = CircuitFragment$data;
export type CircuitFragment$key = {
  +$data?: CircuitFragment$data,
  +$fragmentSpreads: CircuitFragment$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CircuitFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Circuit",
      "kind": "LinkedField",
      "name": "circuit",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "circuitName",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "Location",
          "kind": "LinkedField",
          "name": "location",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "long",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "lat",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "locality",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "country",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Race",
  "abstractKey": null
};

(node/*: any*/).hash = "411a1724288c624431c06de5e7ac1ef0";

module.exports = ((node/*: any*/)/*: Fragment<
  CircuitFragment$fragmentType,
  CircuitFragment$data,
>*/);
