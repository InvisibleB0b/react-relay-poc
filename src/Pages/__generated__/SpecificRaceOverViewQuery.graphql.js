/**
 * @generated SignedSource<<6d938e8082d6c9b629ed28a95d4756ae>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
type SpecificRaceFragment$fragmentType = any;
export type SpecificRaceOverViewQuery$variables = {|
  series: string,
  season?: ?string,
  round?: ?string,
|};
export type SpecificRaceOverViewQueryVariables = SpecificRaceOverViewQuery$variables;
export type SpecificRaceOverViewQuery$data = {|
  +specificRace: $ReadOnlyArray<{|
    +$fragmentSpreads: SpecificRaceFragment$fragmentType,
  |}>,
|};
export type SpecificRaceOverViewQueryResponse = SpecificRaceOverViewQuery$data;
export type SpecificRaceOverViewQuery = {|
  variables: SpecificRaceOverViewQueryVariables,
  response: SpecificRaceOverViewQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "round"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "season"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "series"
},
v3 = [
  {
    "kind": "Variable",
    "name": "round",
    "variableName": "round"
  },
  {
    "kind": "Variable",
    "name": "season",
    "variableName": "season"
  },
  {
    "kind": "Variable",
    "name": "series",
    "variableName": "series"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "SpecificRaceOverViewQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "Race",
        "kind": "LinkedField",
        "name": "specificRace",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "SpecificRaceFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "SpecificRaceOverViewQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "Race",
        "kind": "LinkedField",
        "name": "specificRace",
        "plural": true,
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
            "name": "raceName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "date",
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
            "concreteType": "Result",
            "kind": "LinkedField",
            "name": "results",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "position",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "number",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "grid",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "laps",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "status",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Driver",
                "kind": "LinkedField",
                "name": "driver",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "givenName",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "familyName",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "code",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "dateOfBirth",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "nationality",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Time",
                "kind": "LinkedField",
                "name": "time",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "time",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "millis",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "17f38b7a8232a52d440a2d82ef21dde2",
    "id": null,
    "metadata": {},
    "name": "SpecificRaceOverViewQuery",
    "operationKind": "query",
    "text": "query SpecificRaceOverViewQuery(\n  $series: String!\n  $season: String\n  $round: String\n) {\n  specificRace(series: $series, season: $season, round: $round) {\n    ...SpecificRaceFragment\n    id\n  }\n}\n\nfragment DriversFragment on Result {\n  position\n  number\n  driver {\n    dateOfBirth\n    nationality\n  }\n  time {\n    time\n    millis\n  }\n}\n\nfragment ResultsFragment on Race {\n  results {\n    position\n    number\n    grid\n    laps\n    status\n    driver {\n      givenName\n      familyName\n      code\n    }\n    ...DriversFragment\n  }\n}\n\nfragment SpecificRaceFragment on Race {\n  series\n  season\n  round\n  raceName\n  date\n  url\n  ...ResultsFragment\n}\n"
  }
};
})();

(node/*: any*/).hash = "6abf01ae9f583d96fe9d60e980c6a588";

module.exports = ((node/*: any*/)/*: Query<
  SpecificRaceOverViewQuery$variables,
  SpecificRaceOverViewQuery$data,
>*/);
