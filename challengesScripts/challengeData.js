const DEFAULT_CHALLENGE = {
  "instanceDetails": {
    "name": "My Challenge",
    "status": "active",
    "description": "running challenge",
    "colorCode": "49FA43",
    "dates": {
      "startDate": "2020-02-14T02:22:06.609Z",
      "endDate": "2020-02-16T02:22:06.609Z",
      "openDate": "2020-02-14T02:22:06.609Z",
      "lastJoinableDate": "2020-02-15T02:22:06.609Z",
      "repeatDetails": {
        "numRepeat": 0,
        "repeatGapInterval": 0,
        "repeatUnit": "days"
      }
    },
    "sponsorship": {
      "primaryClient": "",
      "primaryPartner": "",
      "primaryAffiliation": ""
    },
    "isTeam": false,
    "isInviteOnly": false,
    "isUserCreated": false,
    "isCityWalk": false,
    "isIncentivized": false
  },
  "milestoneDetails": {
    "milestoneAmount": {
      "interval": 20,
      "coinValue": 50
    },
    "minorCheckpoints": {
      "interval": 5,
      "coinValue": 5
    },
    "majorCheckpoints": {
      "interval": 10,
      "coinValue": 10
    }
  },
  "checkinDetails": {
    "activityInfo": {
      "activityLabel": "Running & Walking",
      "activityType": "runningWalking",
      "unit": "miles"
    },
    "dailyEntryCap": 50,
    "scoringMethod": "total",
    "allowManualCheckin": true,
    "checkinMethods": [
      "manual",
      "rally"
    ],
    "isDualCheckinAllowed": true
  }
};

const TEAM_CHALLENGE = {
  "instanceDetails": {
    "name": "TEAM Challenge",
    "status": "active",
    "description": "running challenge",
    "colorCode": "49FA43",
    "dates": {
      "startDate": "",
      "endDate": "",
      "openDate": "",
      "lastJoinableDate": "",
      "repeatDetails": {
        "numRepeat": 0,
        "repeatGapInterval": 0,
        "repeatUnit": "days"
      }
    },
    "sponsorship": {
      "primaryClient": "",
      "primaryPartner": "",
      "primaryAffiliation": ""
    },
    "isTeam": true,
    "isInviteOnly": false,
    "isUserCreated": false,
    "isCityWalk": false,
    "isIncentivized": true
  },
  "milestoneDetails": {
    "milestoneAmount": {
      "interval": 0.5,
      "coinValue": 5
    },
    "minorCheckpoints": {
      "interval": 1,
      "coinValue": 10
    },
    "majorCheckpoints": {
      "interval": 20,
      "coinValue": 0
    }
  },
  "checkinDetails": {
    "activityInfo": {
      "activityLabel": "Running & Walking",
      "activityType": "runningWalking",
      "unit": "miles"
    },
    "dailyEntryCap": 50,
    "scoringMethod": "total",
    "allowManualCheckin": true,
    "checkinMethods": [
      "manual",
      "rally"
    ],
    "isDualCheckinAllowed": true
  }
};

const WATER_WARRIOR = {
  "instanceDetails": {
    "name": "WATER WARRIOR",
    "status": "active",
    "description": "water warrior",
    "colorCode": "49FA43",
    "dates": {
      "startDate": "2020-02-13T02:22:06.609Z",
      "endDate": "2020-02-29T02:22:06.609Z",
      "openDate": "2020-02-13T02:22:06.609Z",
      "lastJoinableDate": "2020-02-14T02:22:06.609Z",
      "repeatDetails": {
        "numRepeat": 0,
        "repeatGapInterval": 0,
        "repeatUnit": "days"
      }
    },
    "sponsorship": {
      "primaryClient": "",
      "primaryPartner": "",
      "primaryAffiliation": ""
    },
    "isTeam": false,
    "isInviteOnly": false,
    "isUserCreated": false,
    "isCityWalk": false,
    "isIncentivized": false
  },
  "milestoneDetails": {
    "milestoneAmount": {
      "interval": 20,
      "coinValue": 50
    },
    "minorCheckpoints": {
      "interval": 5,
      "coinValue": 5
    },
    "majorCheckpoints": {
      "interval": 10,
      "coinValue": 10
    }
  },
  "checkinDetails": {
    "dailyEntryCap": 100,
    "checkinMethods": [
      "manual",
      "rally"
    ],
    "isDualCheckinAllowed": true,
    "allowManualCheckin": true,
    "scoringMethod": "total",
    "activityType": "waterWarrior"
  }
};

const FOOD = {
  "instanceDetails": {
    "name": "FOOD",
    "status": "active",
    "description": "Switch up your snacks for healthy options. Focus on lean snacks that are filling and provide a lot of nutrients. For example, vegetables with hummus dip, or low-fat yogurt and fruit, or a few nuts. Plan ahead and pack healthy options when you go out.",
    "colorCode": "49FA43",
    "dates": {
      "startDate": "2020-02-13T02:22:06.609Z",
      "endDate": "2020-02-29T02:22:06.609Z",
      "openDate": "2020-02-13T02:22:06.609Z",
      "lastJoinableDate": "2020-02-14T02:22:06.609Z",
      "repeatDetails": {
        "numRepeat": 0,
        "repeatGapInterval": 0,
        "repeatUnit": "days"
      }
    },
    "sponsorship": {
      "primaryClient": "",
      "primaryPartner": "",
      "primaryAffiliation": ""
    },
    "isTeam": false,
    "isInviteOnly": false,
    "isUserCreated": false,
    "isCityWalk": false,
    "isIncentivized": false
  },
  "milestoneDetails": {
    "milestoneAmount": {
      "interval": 20,
      "coinValue": 50
    },
    "minorCheckpoints": {
      "interval": 5,
      "coinValue": 5
    },
    "majorCheckpoints": {
      "interval": 10,
      "coinValue": 10
    }
  },
  "checkinDetails": {
    "dailyEntryCap": 100,
    "checkinMethods": [
      "manual",
      "rally"
    ],
    "isDualCheckinAllowed": true,
    "allowManualCheckin": true,
    "scoringMethod": "total",
    "activityType": "snackSwap"
  }
};

const MEDITATION = {
  "instanceDetails": {
    "name": "Meditation",
    "status": "active",
    "description": "Take little breaks to recharge with meditation. What happens in your brain affects your body. Mental calm and focus can help reduce stress. It may even lower your blood pressure! Challenge yourself to cultivate some calm.",
    "colorCode": "49FA43",
    "dates": {
      "startDate": "2020-02-13T02:22:06.609Z",
      "endDate": "2020-02-29T02:22:06.609Z",
      "openDate": "2020-02-13T02:22:06.609Z",
      "lastJoinableDate": "2020-02-14T02:22:06.609Z",
      "repeatDetails": {
        "numRepeat": 0,
        "repeatGapInterval": 0,
        "repeatUnit": "days"
      }
    },
    "sponsorship": {
      "primaryClient": "",
      "primaryPartner": "",
      "primaryAffiliation": ""
    },
    "isTeam": false,
    "isInviteOnly": false,
    "isUserCreated": false,
    "isCityWalk": false,
    "isIncentivized": false
  },
  "milestoneDetails": {
    "milestoneAmount": {
      "interval": 20,
      "coinValue": 50
    },
    "minorCheckpoints": {
      "interval": 5,
      "coinValue": 5
    },
    "majorCheckpoints": {
      "interval": 10,
      "coinValue": 10
    }
  },
  "checkinDetails": {
    "dailyEntryCap": 100,
    "checkinMethods": [
      "manual",
      "rally"
    ],
    "isDualCheckinAllowed": true,
    "allowManualCheckin": true,
    "scoringMethod": "total",
    "activityType": "getCentered"
  }
};

const KINDNESS = {
  "instanceDetails": {
    "name": "KINDNESS",
    "status": "active",
    "description": "Take little breaks to recharge with meditation. What happens in your brain affects your body. Mental calm and focus can help reduce stress. It may even lower your blood pressure! Challenge yourself to cultivate some calm.",
    "colorCode": "49FA43",
    "dates": {
      "startDate": "2020-02-13T02:22:06.609Z",
      "endDate": "2020-02-29T02:22:06.609Z",
      "openDate": "2020-02-13T02:22:06.609Z",
      "lastJoinableDate": "2020-02-14T02:22:06.609Z",
      "repeatDetails": {
        "numRepeat": 0,
        "repeatGapInterval": 0,
        "repeatUnit": "days"
      }
    },
    "sponsorship": {
      "primaryClient": "",
      "primaryPartner": "",
      "primaryAffiliation": ""
    },
    "isTeam": false,
    "isInviteOnly": false,
    "isUserCreated": false,
    "isCityWalk": false,
    "isIncentivized": false
  },
  "milestoneDetails": {
    "milestoneAmount": {
      "interval": 20,
      "coinValue": 50
    },
    "minorCheckpoints": {
      "interval": 5,
      "coinValue": 5
    },
    "majorCheckpoints": {
      "interval": 10,
      "coinValue": 10
    }
  },
  "checkinDetails": {
    "dailyEntryCap": 100,
    "checkinMethods": [
      "manual",
      "rally"
    ],
    "isDualCheckinAllowed": true,
    "allowManualCheckin": true,
    "scoringMethod": "total",
    "activityType": "payItForward"
  }
};

const CITY_WALK_DC = {
  "instanceDetails": {
    "name": "DC DASH",
    "status": "active",
    "description": "Conquer the Hill in a virtual race across Washington, D.C.! Track your steps wherever you are to compete on our digital racecourse. Hit the milestone and win bragging rights in this fun, friendly competition.",
    "colorCode": "49FA43",
    "dates": {
      "startDate": "2020-02-14T02:22:06.609Z",
      "endDate": "2020-02-16T02:22:06.609Z",
      "openDate": "2020-02-14T02:22:06.609Z",
      "lastJoinableDate": "2020-02-15T02:22:06.609Z",
      "repeatDetails": {
        "numRepeat": 0,
        "repeatGapInterval": 0,
        "repeatUnit": "days"
      }
    },
    "sponsorship": {
      "primaryClient": "",
      "primaryPartner": "",
      "primaryAffiliation": ""
    },
    "isTeam": false,
    "isInviteOnly": false,
    "isUserCreated": false,
    "isCityWalk": true,
    "isIncentivized": false,
    "cityId": "dcdash"
  },
  "milestoneDetails": {
    "milestoneAmount": {
      "interval": 20,
      "coinValue": 50
    },
    "minorCheckpoints": {
      "interval": 5,
      "coinValue": 5
    },
    "majorCheckpoints": {
      "interval": 10,
      "coinValue": 10
    }
  },
  "checkinDetails": {
    "activityInfo": {
      "activityLabel": "Running & Walking",
      "activityType": "runningWalking",
      "unit": "miles"
    },
    "dailyEntryCap": 50,
    "scoringMethod": "total",
    "allowManualCheckin": true,
    "checkinMethods": [
      "manual",
      "rally"
    ],
    "isDualCheckinAllowed": true
  }
};

module.exports = {
  DEFAULT_CHALLENGE,
  TEAM_CHALLENGE,
  WATER_WARRIOR,
  FOOD,
  MEDITATION,
  KINDNESS,
  CITY_WALK_DC,
};
