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
    "activityType": "hydration"
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
    "activityType": "healthySnacking"
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
    "activityType": "meditation"
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
    "activityType": "actsOfKindness"
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

const CITY_WALK_SF = {
  "instanceDetails": {
    "name": "SF Stomp",
    "status": "active",
    "description": "Wherever you live, take a virtual trip to scenic San Francisco. The City by the Bay! Track your real-world steps to see how your activity stacks up on our digital racecourse. Hit the milestone and win bragging rights in this fun, friendly competition!",
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
    "cityId": "sfstomp"
  },
  "milestoneDetails": {
    "milestoneAmount": {
      "interval": 20,
      "coinValue": 50
    },
    "minorCheckpoints": {
      "interval": 2.5,
      "coinValue": 5
    },
    "majorCheckpoints": {
      "interval": 5,
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

const CITY_WALK_CHI = {
  "instanceDetails": {
    "name": "Chi Town Shuffle",
    "status": "active",
    "description": "From the lake to the Loop, take a virtual hike across Chicago! Track your steps as you go about your day to see how your activity stacks up on our digital racecourse. Get ready to walk your way through the windy city. ",
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
    "cityId": "chitownshuffle"
  },
  "milestoneDetails": {
    "milestoneAmount": {
      "interval": 20,
      "coinValue": 50
    },
    "minorCheckpoints": {
      "interval": 2.5,
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
    ],
    "isDualCheckinAllowed": false
  }
};

const PRIVATE_CHALLENGE = {
  "instanceDetails": {
    "name": "Private My Challenge",
    "status": "active",
    "description": "Amet aliquam id diam maecenas ultriciese eget mauris pharetra. Bibendum neque egestas congue quisque egestas diam in arcu. Porttitor leo a diam sollicitudin tempor id eu nisl nunc. Semper quis lectus nulla at volutpat diam. Scelerisque viverra mauris",
    "colorCode": "49FA43",
    "dates": {
      "startDate": "2020-04-10T02:22:06.609Z",
      "endDate": "2020-04-10T02:22:06.609Z",
      "openDate": "2020-04-10T02:22:06.609Z",
      "lastJoinableDate": "2020-04-10T02:22:06.609Z",
      "repeatDetails": {
        "numRepeat": 0,
        "repeatGapInterval": 0,
        "repeatUnit": "days"
      }
    },
    "sponsorship": {
      "primaryClient": "optum_default",
      "primaryPartner": "optum",
      "primaryAffiliation": ""
    },
    "isTeam": false,
    "isInviteOnly": true,
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

const CHALLENGE_CITY_WALK_SF_STEPS = {
  "instanceDetails": {
    "name": "SF Stomp STEPS",
    "status": "active",
    "description": "Wherever you live, take a virtual trip to scenic San Francisco. The City by the Bay! Track your real-world steps to see how your activity stacks up on our digital racecourse. Hit the milestone and win bragging rights in this fun, friendly competition!",
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
    "cityId": "sfstomp"
  },
  "milestoneDetails": {
    "milestoneAmount": {
      "interval": 40000,
      "coinValue": 50
    },
    "minorCheckpoints": {
      "interval": 5000,
      "coinValue": 5
    },
    "majorCheckpoints": {
      "interval": 20000,
      "coinValue": 10
    }
  },
  "checkinDetails": {
    "dailyEntryCap": 20000000,
    "scoringMethod": "total",
    "allowManualCheckin": true,
    "checkinMethods": [
      "manual",
      "rally"
    ],
    "isDualCheckinAllowed": true,
    "activityType": "runningWalkingSteps"
  }
};

const CHALLENGE_CITY_WALK_DC_STEPS = {
  "instanceDetails": {
    "name": "DC DASH STEP",
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
      "interval": 20000,
      "coinValue": 50
    },
    "minorCheckpoints": {
      "interval": 10000,
      "coinValue": 5
    },
    "majorCheckpoints": {
      "interval": 50000,
      "coinValue": 10
    }
  },
  "checkinDetails": {
    "dailyEntryCap": 500000,
    "scoringMethod": "total",
    "allowManualCheckin": true,
    "checkinMethods": [
      "manual",
      "rally"
    ],
    "isDualCheckinAllowed": true,
    "activityType": "runningWalkingSteps"
  }
};

const ELLIPTICAL = {
  "instanceDetails": {
    "name": "TEAM ELLIPTICAL",
    "status": "active",
    "description": "Elevate your fitness on the elliptical! Get moving on the machine and track your progress. Challenge yourself to get your heart pumping!",
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
    "isTeam": true,
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
    "dailyEntryCap": 180,
    "checkinMethods": [
      "manual",
      "rally"
    ],
    "isDualCheckinAllowed": true,
    "allowManualCheckin": true,
    "scoringMethod": "total",
    "activityType": "elliptical"
  }
};

const CYCLING = {
  "instanceDetails": {
    "name": "TEAM CYCLING",
    "status": "active",
    "description": "Cycle your way to a healthier you! Challenge yourself with a daily ride. Choose a stationary bike or the wild outdoors. It doesn’t matter as long as you get moving!",
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
    "isTeam": true,
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
    "dailyEntryCap": 180,
    "checkinMethods": [
      "manual",
      "rally"
    ],
    "isDualCheckinAllowed": true,
    "allowManualCheckin": true,
    "scoringMethod": "total",
    "activityType": "cycling"
  }
};

const YOGA = {
  "instanceDetails": {
    "name": "TEAM YOGA",
    "status": "active",
    "description": "Stretch your mind and body with a daily dose of yoga. It doesn’t matter if you're a beginner or a master yogi. Challenge yourself this week. ",
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
    "isTeam": true,
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
    "dailyEntryCap": 180,
    "checkinMethods": [
      "manual",
      "rally"
    ],
    "isDualCheckinAllowed": true,
    "allowManualCheckin": true,
    "scoringMethod": "total",
    "activityType": "yoga"
  }
};

const SWIMMING = {
  "instanceDetails": {
    "name": "TEAM SWIMMING",
    "status": "active",
    "description": "Freestyle, butterfly, or doggy paddle. Whatever stroke you prefer, just keep swimming! Hit your goals and you’ll be feeling like a winner by the week's end",
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
    "isTeam": true,
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
    "dailyEntryCap": 180,
    "checkinMethods": [
      "manual",
      "rally"
    ],
    "isDualCheckinAllowed": true,
    "allowManualCheckin": true,
    "scoringMethod": "total",
    "activityType": "swimming"
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
  CITY_WALK_SF,
  CHALLENGE_CITY_WALK_SF_STEPS,
  CHALLENGE_CITY_WALK_DC_STEPS,
  CITY_WALK_CHI,
  PRIVATE_CHALLENGE,
  ELLIPTICAL,
  CYCLING,
  YOGA,
  SWIMMING
};
