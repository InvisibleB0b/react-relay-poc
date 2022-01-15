/**
 * @generated SignedSource<<544db38326c241c4dd3952782084d124>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type AppRacesFragment$fragmentType: FragmentType;
export type AppRacesFragment$ref = AppRacesFragment$fragmentType;
export type AppRacesFragment$data = {|
  +series: string,
  +season: string,
  +round: string,
  +url: string,
  +raceName: string,
  +date: string,
  +$fragmentType: AppRacesFragment$fragmentType,
|};
export type AppRacesFragment = AppRacesFragment$data;
export type AppRacesFragment$key = {
  +$data?: AppRacesFragment$data,
  +$fragmentSpreads: AppRacesFragment$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppRacesFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "series",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "season",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "round",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "url",
      "storageKey": null
    },
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
      "name": "date",
      "storageKey": null
    }
  ],
  "type": "Race",
  "abstractKey": null
};

(node/*: any*/).hash = "2bb5dbabe482f7891be561a9b7e6e552";

module.exports = ((node/*: any*/)/*: Fragment<
  AppRacesFragment$fragmentType,
  AppRacesFragment$data,
>*/);
