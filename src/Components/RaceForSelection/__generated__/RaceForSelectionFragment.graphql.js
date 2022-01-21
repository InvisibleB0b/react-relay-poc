/**
 * @generated SignedSource<<988405fc33b0fb97bf825db78e435505>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type RaceForSelectionFragment$fragmentType: FragmentType;
export type RaceForSelectionFragment$ref = RaceForSelectionFragment$fragmentType;
export type RaceForSelectionFragment$data = {|
  +raceName: string,
  +round: string,
  +$fragmentType: RaceForSelectionFragment$fragmentType,
|};
export type RaceForSelectionFragment = RaceForSelectionFragment$data;
export type RaceForSelectionFragment$key = {
  +$data?: RaceForSelectionFragment$data,
  +$fragmentSpreads: RaceForSelectionFragment$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RaceForSelectionFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "raceName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "round",
      "storageKey": null
    }
  ],
  "type": "Race",
  "abstractKey": null
};

(node/*: any*/).hash = "ffcbf5462a51b7e6fea13483a47cd8b3";

module.exports = ((node/*: any*/)/*: Fragment<
  RaceForSelectionFragment$fragmentType,
  RaceForSelectionFragment$data,
>*/);
