define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function configure(aurelia) {
    aurelia.use.standardConfiguration().plugin('aurelia-dialog').plugin('aurelia-validation').feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot('login/login');
    });
  }
});
define('backend/lorem',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.generateSentence = generateSentence;
  exports.generateTitle = generateTitle;
  var text = 'In tempus neque mollis, pharetra arcu et, varius lacus. Sed nunc elit, cursus eget convallis sit amet, congue eget ligula. Nullam nec finibus arcu. Suspendisse vitae lectus mollis nunc laoreet dignissim vitae ut ligula. Vestibulum ut sodales libero. Pellentesque accumsan enim nunc, a facilisis magna porttitor quis. Pellentesque faucibus, erat nec aliquet consequat, turpis orci sollicitudin ante, et ultricies libero eros a diam. Aliquam pharetra sapien non gravida aliquet. Aliquam sed ante accumsan, auctor arcu ut, pretium arcu. Nullam nulla diam, suscipit in mollis sed, auctor ut risus. Maecenas lacinia non mauris quis rhoncus. Nunc purus sem, fringilla vitae pulvinar ac, egestas nec massa. Pellentesque imperdiet vitae ex nec eleifend. Vivamus dictum congue ex nec varius. Praesent ut augue sem. Vivamus commodo, risus sit amet tincidunt dignissim, nunc lectus feugiat odio, quis congue turpis ipsum sed sapien. Cras id dui dignissim, faucibus quam facilisis, congue ligula. Nunc sollicitudin justo a odio molestie, quis posuere magna tempor. Aliquam sodales nisi ex, in malesuada dolor posuere a. Cras iaculis pretium ipsum, mollis maximus urna. Proin fermentum lectus maximus efficitur pulvinar. Maecenas ac consequat velit, eget dapibus elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent venenatis tortor a enim lobortis posuere quis non nisi. Morbi accumsan mauris et lectus fringilla rutrum sed in ante. Nulla velit purus, tristique eleifend lacinia quis, consectetur non justo. Duis vulputate efficitur facilisis. Cras a auctor libero. Proin pellentesque dolor in pretium tempus. In auctor ut lacus in viverra. Aenean pulvinar consequat lobortis. Phasellus luctus odio dui, vel tristique ipsum luctus id. Ut tincidunt diam quis quam tincidunt consequat sed sit amet elit. Nulla facilisi. Aenean elementum malesuada libero ac ultrices. Vivamus fermentum quis ex vel ultrices. Nullam urna dolor, pretium vel massa et, vestibulum lobortis lorem. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut varius pretium leo. Nulla in euismod nibh. Curabitur tempus varius mauris, vitae consequat urna mollis sed. Vivamus efficitur justo id nisl sodales, non vehicula lectus pretium. Donec vel mi lorem. Integer dolor tortor, finibus eget semper nec, scelerisque et lacus. Integer id imperdiet ante. Integer placerat enim luctus luctus efficitur. Quisque eros enim, cursus id volutpat ac, finibus vel arcu. Donec a nibh nibh. Cras ligula enim, pretium nec sapien non, tempor feugiat urna. In ultricies diam ac eleifend feugiat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst. Donec in velit sit amet est feugiat suscipit in sollicitudin odio. Suspendisse aliquam est vel neque dignissim consequat. Maecenas a diam id felis ultricies euismod. Nullam lacus urna, egestas ut orci volutpat, imperdiet commodo ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed eleifend mattis diam, ac consectetur est cursus sit amet. Nam euismod risus vitae libero aliquet, viverra pellentesque sem pulvinar. Praesent tincidunt et enim et volutpat. Vestibulum vel lorem vitae purus facilisis ultrices. Nam dictum sodales justo, efficitur accumsan tortor posuere sit amet. Suspendisse imperdiet id lectus id suscipit. Duis ornare commodo bibendum. Fusce justo ante, scelerisque quis ex vel, auctor lacinia mauris. Maecenas elementum id dolor sit amet consequat. Phasellus sed nibh bibendum enim accumsan volutpat. Curabitur rhoncus euismod nibh, sit amet vestibulum arcu iaculis et. Ut eleifend ligula non lectus consequat, ut aliquam nunc accumsan. Curabitur eget justo ut ipsum maximus egestas. Praesent tempus, sapien vel lacinia euismod, odio enim blandit sem, eget congue mi enim ornare erat. Proin ornare, sem non sagittis mattis, nisi lorem porttitor erat, id euismod arcu diam ut augue. Ut tincidunt hendrerit nisl, sit amet tempor neque rutrum vitae. Sed dictum ante ac sem volutpat auctor. Fusce at fringilla neque. Cras vel nulla non arcu porttitor finibus. Aenean placerat condimentum enim luctus auctor. Pellentesque sit amet elit consequat, vulputate eros nec, ultrices mauris. Sed blandit sed diam id interdum. Proin vitae lectus non urna interdum imperdiet. Donec et velit ut lacus congue gravida. Aliquam efficitur a augue a pulvinar. Pellentesque sollicitudin nunc id mauris elementum fermentum. Praesent pellentesque mauris lorem, sit amet cursus nunc tristique ac. In pulvinar ullamcorper lacus, ac venenatis felis ultricies vitae. Etiam dolor nisi, fringilla non libero et, mollis blandit est. Fusce ultrices rhoncus elementum. Quisque et tortor nec sapien sodales ultricies. Phasellus commodo est massa, nec posuere lectus tristique vel. Etiam sagittis lacus eu sodales semper. In porta sit amet dolor et dignissim. In convallis nunc vel feugiat tincidunt. Nunc hendrerit pretium magna et mattis. Mauris et gravida justo. Mauris eleifend metus non odio eleifend, id iaculis dui consequat. Ut aliquam luctus vulputate. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed ut sapien gravida, consequat lectus vitae, aliquam felis. Pellentesque eget placerat ligula. In hac habitasse platea dictumst. In nec nulla feugiat, tincidunt tellus a, congue nibh. Morbi cursus condimentum arcu, sed faucibus metus ultrices quis. Aenean nec maximus justo. Nullam non justo velit. Nunc vestibulum pharetra neque eget sagittis. Phasellus volutpat semper massa, a accumsan dui bibendum id. Sed in egestas magna, nec blandit libero. Suspendisse ut lectus rutrum, imperdiet nisl in, imperdiet nisl. Pellentesque non bibendum lacus, sit amet sollicitudin ligula. Cras egestas tincidunt arcu, at porta justo ultricies sed. Suspendisse quam nisl, volutpat sed quam in, ornare mattis augue. Suspendisse eget ex mollis, hendrerit mauris sed, molestie leo. Pellentesque efficitur aliquam scelerisque. Vivamus at eros at metus semper suscipit. In neque enim, imperdiet id mattis sed, viverra non purus. Sed accumsan sodales ex, hendrerit scelerisque augue. In et eleifend sapien, vitae aliquam felis. Pellentesque faucibus sed tortor nec ullamcorper. Nulla tempus diam et gravida imperdiet. Ut volutpat dignissim porta. Etiam a finibus sem. Nulla facilisi. Nulla ac suscipit orci. Cras sit amet magna odio. Curabitur vel sapien dapibus, feugiat lacus vel, pellentesque justo. Donec vitae consectetur velit. Pellentesque ut risus a erat scelerisque mattis. Sed pellentesque lorem varius dictum pulvinar. Suspendisse vestibulum nec quam et sagittis. Nunc suscipit molestie.';

  var sentences = text.split('. ');

  var count = sentences.length;

  function generateSentence() {
    return sentences[Math.floor(Math.random() * count)] + '.';
  }

  function generateTitle() {
    return sentences[Math.floor(Math.random() * count)].trim().split(' ').slice(0, 3).join(' ').slice(0, -1);
  }
});
define('backend/server',['exports', './lorem'], function (exports, _lorem) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Server = exports.User = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var latency = 0;

  function wait() {
    var ms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : latency;

    return new Promise(function (resolve) {
      return setTimeout(resolve, ms);
    });
  }

  function _clone(data) {
    return JSON.parse(JSON.stringify(data));
  }

  var User = exports.User = function () {
    function User(attrs) {
      _classCallCheck(this, User);

      if (attrs) {
        Object.assign(this, attrs);
      }
    }

    User.prototype.clone = function clone() {
      return new User(_clone(this));
    };

    _createClass(User, [{
      key: 'fullName',
      get: function get() {
        return this.firstName + ' ' + this.lastName;
      }
    }, {
      key: 'ticketCount',
      get: function get() {
        var _this = this;

        return ticketData.filter(function (t) {
          return t.fromId === _this.id;
        }).length;
      }
    }, {
      key: 'postCount',
      get: function get() {
        var _this2 = this;

        return ticketData.reduce(function (a, b) {
          return a.concat(b.posts);
        }, []).filter(function (p) {
          return p.fromId === _this2.id;
        }).length;
      }
    }]);

    return User;
  }();

  var userData = [new User({
    id: 1,
    username: 'EisenbergEffect',
    email: 'rob@eisenberg.com',
    firstName: 'Rob',
    lastName: 'Eisenberg',
    iconUrl: '/img/users/icon/1.jpg',
    avatarUrl: '/img/users/avatar/1.jpg',
    isActive: true
  }), new User({
    id: 2,
    username: 'bryanrsmith',
    email: 'bryan@smith.com',
    firstName: 'Bryan',
    lastName: 'Smith',
    iconUrl: '/img/users/icon/2.jpg',
    avatarUrl: '/img/users/avatar/2.jpg',
    isActive: true
  }), new User({
    id: 3,
    username: 'cmichaelgraham',
    email: 'mike@graham.com',
    firstName: 'Mike',
    lastName: 'Graham',
    iconUrl: '/img/users/icon/3.jpg',
    avatarUrl: '/img/users/avatar/3.jpg',
    isActive: true
  }), new User({
    id: 4,
    username: 'jdanyow',
    email: 'jeremy@danyow.com',
    firstName: 'Jeremy',
    lastName: 'Danyow',
    iconUrl: '/img/users/icon/4.jpg',
    avatarUrl: '/img/users/avatar/4.jpg',
    isActive: true
  }), new User({
    id: 5,
    username: 'martingust',
    email: 'martin@gust.com',
    firstName: 'Martin',
    lastName: 'Gust',
    iconUrl: '/img/users/icon/5.jpg',
    avatarUrl: '/img/users/avatar/5.jpg',
    isActive: true
  }), new User({
    id: 6,
    username: 'AshleyGrant',
    email: 'ashley@grant.com',
    firstName: 'Ashley',
    lastName: 'Grant',
    iconUrl: '/img/users/icon/6.jpg',
    avatarUrl: '/img/users/avatar/6.jpg',
    isActive: true
  }), new User({
    id: 7,
    username: 'davismj',
    email: 'matthew@davis.com',
    firstName: 'Matthew',
    lastName: 'Davis',
    iconUrl: '/img/users/icon/7.jpg',
    avatarUrl: '/img/users/avatar/7.jpg',
    isActive: true
  }), new User({
    id: 8,
    username: 'PWKad',
    email: 'patrick@walters.com',
    firstName: 'Patrick',
    lastName: 'Walters',
    iconUrl: '/img/users/icon/8.jpg',
    avatarUrl: '/img/users/avatar/8.jpg',
    isActive: true
  })];

  function randomDateInLastThirtyDays() {
    return new Date(new Date().getTime() - Math.random() * 30 * 24 * 60 * 60 * 1000);
  }

  function addRandomNumberOfDaysToDate(start, maxDays) {
    return new Date(Math.min(new Date(start.getTime() + Math.random() * Math.floor(Math.random() * maxDays) * 24 * 60 * 60 * 1000), new Date()));
  }

  var ticketData = [{
    id: 1,
    title: null,
    createdAt: new Date(),
    fromId: 1,
    status: 'Open',
    priority: 'Normal',
    type: 'Problem',
    participants: [],
    posts: [{
      createdAt: null,
      fromId: null,
      content: null
    }]
  }];

  for (var i = 0; i < 100; i++) {
    ticketData[i] = _clone(ticketData[0]);
    ticketData[i].id = i + 1;
    ticketData[i].title = (0, _lorem.generateTitle)();
    ticketData[i].participants[0] = _clone(userData[Math.floor(Math.random() * 8)]);
    ticketData[i].fromId = ticketData[i].participants[0].id;
    ticketData[i].createdAt = randomDateInLastThirtyDays();
    ticketData[i].posts[0].createdAt = addRandomNumberOfDaysToDate(ticketData[i].createdAt, 30);
    ticketData[i].posts[0].fromId = ticketData[i].participants[0].id;
    ticketData[i].posts[0].content = (0, _lorem.generateSentence)();
  }

  ticketData.sort(function (a, b) {
    return b.createdAt - a.createdAt;
  });

  var activityData = [{
    id: 1,
    createdAt: new Date(),
    content: (0, _lorem.generateSentence)(),
    type: 'ticket',
    associatedId: 1
  }];

  var _loop = function _loop(_i) {
    activityData[_i] = _clone(activityData[0]);
    activityData[_i].id = _i + 1;
    activityData[_i].createdAt = randomDateInLastThirtyDays();
    activityData[_i].associatedId = _i + 1;
    activityData[_i].createdBy = _clone(userData[Math.floor(Math.random() * 8)]);

    var ticket = ticketData.find(function (t) {
      return t.id === activityData[_i].associatedId;
    });
    activityData[_i].title = activityData[_i].createdBy.firstName + ' ' + activityData[_i].createdBy.lastName + ' <strong>posted</strong> a message to the ticket "' + ticket.title + '"';
  };

  for (var _i = 0; _i < 100; _i++) {
    _loop(_i);
  }

  activityData.sort(function (a, b) {
    return b.createdAt - a.createdAt;
  });

  var Server = exports.Server = function () {
    function Server() {
      _classCallCheck(this, Server);
    }

    Server.prototype.login = function login(username, password) {
      return wait().then(function () {
        if (username === 'un' && password === 'pw') {
          return userData[0].clone();
        }
      });
    };

    Server.prototype.createUser = function createUser() {
      return new User({
        id: 0,
        username: 'NewUser',
        email: '',
        firstName: 'New',
        lastName: 'User',
        iconUrl: '/img/users/icon/1.jpg',
        avatarUrl: '/img/users/avatar/1.jpg',
        isActive: false
      });
    };

    Server.prototype.saveUser = function saveUser(user) {
      return wait().then(function () {
        var clone = user.clone();

        if (clone.id == 0) {
          clone.id = userData.length + 1;
          userData.unshift(clone);
        } else {
          var existing = userData.find(function (c) {
            return c.id === clone.id;
          });
          var index = userData.indexOf(existing);
          userData.splice(index, 1, clone);
        }

        return clone.clone();
      });
    };

    Server.prototype.getUser = function getUser(userId) {
      return wait().then(function () {
        var existing = userData.find(function (c) {
          return c.id === userId;
        });
        return existing ? existing.clone() : null;
      });
    };

    Server.prototype.getUserSummaries = function getUserSummaries() {
      return wait().then(function () {
        return userData.map(function (x) {
          return x.clone();
        });
      });
    };

    Server.prototype.createTicket = function createTicket(title) {
      var currentUser = _clone(userData[0]);

      return {
        id: 0,
        title: title,
        createdAt: new Date(),
        fromId: currentUser.id,
        status: 'Open',
        priority: 'Normal',
        type: 'Problem',
        participants: [currentUser],
        posts: []
      };
    };

    Server.prototype.saveTicket = function saveTicket(ticket) {
      return wait().then(function () {
        if (ticketData.indexOf(ticket) === -1) {
          ticket.id = ticketData.length + 1;
          ticketData.unshift(ticket);
        }

        return ticket;
      });
    };

    Server.prototype.getTicketSummaries = function getTicketSummaries() {
      return wait().then(function () {
        return _clone(ticketData);
      });
    };

    Server.prototype.getTicketDetails = function getTicketDetails(ticketId) {
      return wait().then(function () {
        return ticketData.find(function (x) {
          return x.id === ticketId;
        });
      });
    };

    Server.prototype.getRecentActivity = function getRecentActivity() {
      return wait().then(function () {
        return _clone(activityData);
      });
    };

    Server.prototype.getNews = function getNews() {
      return wait().then(function () {
        return [{
          title: "New Features Launched",
          content: "'You ought to be ashamed of yourself for asking such a simple question,' added the Gryphon; and then they both sat silent and looked at poor Alice, who felt ready to sink into the earth. At last the Gryphon said to the Mock Turtle, 'Drive on, old fellow! Don't be all day about it!' and he went on in these words: 'Yes, we went to school in the sea, though you mayn't believe it—' 'I never said I didn't!' interrupted Alice. 'You did,' said the Mock Turtle.",
          createdAt: new Date(),
          tags: ["release", "features", "blog"]
        }, {
          title: "Satisfaction Guaranteed",
          content: "'I am bound to Tahiti for more men.' 'Very good. Let me board you a moment—I come in peace.' With that he leaped from the canoe, swam to the boat; and climbing the gunwale, stood face to face with the captain. 'Cross your arms, sir; throw back your head. Now, repeat after me. As soon as Steelkilt leaves me, I swear to beach this boat on yonder island, and remain there six days. If I do not, may lightning strike me!'A pretty scholar,' laughed the Lakeman. 'Adios, Senor!' and leaping into the sea, he swam back to his comrades.",
          createdAt: new Date(),
          tags: ["release", "launch", "blog"]
        }];
      });
    };

    return Server;
  }();
});
define('login/login',['exports', 'aurelia-dependency-injection', 'aurelia-framework', 'backend/server'], function (exports, _aureliaDependencyInjection, _aureliaFramework, _server) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Login = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Login = exports.Login = (_dec = (0, _aureliaDependencyInjection.inject)(_aureliaFramework.Aurelia, _server.Server), _dec(_class = function () {
    function Login(aurelia, server) {
      _classCallCheck(this, Login);

      this.aurelia = aurelia;
      this.server = server;
      this.username = '';
      this.password = '';
      this.message = '';
    }

    Login.prototype.login = function login() {
      var _this = this;

      this.server.login(this.username, this.password).then(function (result) {
        if (result) {
          _this.message = '';
          _this.aurelia.use.instance(_server.User, result);
          _this.aurelia.setRoot('shell/shell');
        } else {
          _this.message = 'Incorrect Username or Password!';
        }
      });
    };

    return Login;
  }()) || _class);
});
define('home/home',['exports', 'aurelia-framework', 'backend/server'], function (exports, _aureliaFramework, _server) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Home = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Home = exports.Home = (_dec = (0, _aureliaFramework.inject)(_server.Server), _dec(_class = function () {
    function Home(server) {
      _classCallCheck(this, Home);

      this.server = server;
      this.activity = null;
      this.news = null;
    }

    Home.prototype.activate = function activate() {
      var _this = this;

      return Promise.all([this.server.getRecentActivity().then(function (activity) {
        return _this.activity = activity;
      }), this.server.getNews().then(function (news) {
        return _this.news = news;
      })]);
    };

    return Home;
  }()) || _class);
});
define('resources/bootstrap-form-renderer',['exports', 'aurelia-validation'], function (exports, _aureliaValidation) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.BootstrapFormRenderer = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var BootstrapFormRenderer = exports.BootstrapFormRenderer = function () {
    function BootstrapFormRenderer() {
      _classCallCheck(this, BootstrapFormRenderer);
    }

    BootstrapFormRenderer.prototype.render = function render(instruction) {
      for (var _iterator = instruction.unrender, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref2 = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref2 = _i.value;
        }

        var _ref5 = _ref2;
        var error = _ref5.error,
            elements = _ref5.elements;

        for (var _iterator3 = elements, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
          var _ref6;

          if (_isArray3) {
            if (_i3 >= _iterator3.length) break;
            _ref6 = _iterator3[_i3++];
          } else {
            _i3 = _iterator3.next();
            if (_i3.done) break;
            _ref6 = _i3.value;
          }

          var element = _ref6;

          this.remove(element, error);
        }
      }

      for (var _iterator2 = instruction.render, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref4;

        if (_isArray2) {
          if (_i2 >= _iterator2.length) break;
          _ref4 = _iterator2[_i2++];
        } else {
          _i2 = _iterator2.next();
          if (_i2.done) break;
          _ref4 = _i2.value;
        }

        var _ref7 = _ref4;
        var error = _ref7.error,
            elements = _ref7.elements;

        for (var _iterator4 = elements, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
          var _ref8;

          if (_isArray4) {
            if (_i4 >= _iterator4.length) break;
            _ref8 = _iterator4[_i4++];
          } else {
            _i4 = _iterator4.next();
            if (_i4.done) break;
            _ref8 = _i4.value;
          }

          var _element = _ref8;

          this.add(_element, error);
        }
      }
    };

    BootstrapFormRenderer.prototype.add = function add(element, error) {
      var formGroup = element.closest('.form-group');
      if (!formGroup) {
        return;
      }

      formGroup.classList.add('has-error');

      var message = document.createElement('span');
      message.className = 'help-block validation-message';
      message.textContent = error.message;
      message.id = 'validation-message-' + error.id;
      formGroup.appendChild(message);
    };

    BootstrapFormRenderer.prototype.remove = function remove(element, error) {
      var formGroup = element.closest('.form-group');
      if (!formGroup) {
        return;
      }

      var message = formGroup.querySelector('#validation-message-' + error.id);
      if (message) {
        formGroup.removeChild(message);

        if (formGroup.querySelectorAll('.help-block.validation-message').length === 0) {
          formGroup.classList.remove('has-error');
        }
      }
    };

    return BootstrapFormRenderer;
  }();
});
define('resources/index',['exports', 'chartjs'], function (exports, _chartjs) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _chartjs2 = _interopRequireDefault(_chartjs);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _chartjs2.default.defaults.global.responsive = true;

  function configure(config) {
    config.globalResources(['./value-converters/activity-type-to-route', './value-converters/date', './elements/rich-text-editor', './elements/data-grid', './elements/chart-data', './elements/line-chart', './elements/bar-chart']);
  }
});
define('settings/index',['exports', './routes'], function (exports, _routes2) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.CategoriesValueConverter = exports.SettingsIndex = undefined;

  var _routes3 = _interopRequireDefault(_routes2);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var SettingsIndex = exports.SettingsIndex = function () {
    function SettingsIndex() {
      _classCallCheck(this, SettingsIndex);
    }

    SettingsIndex.prototype.configureRouter = function configureRouter(config, router) {
      this.router = router;
      config.map(_routes3.default);
    };

    return SettingsIndex;
  }();

  var CategoriesValueConverter = exports.CategoriesValueConverter = function () {
    function CategoriesValueConverter() {
      _classCallCheck(this, CategoriesValueConverter);
    }

    CategoriesValueConverter.prototype.toView = function toView(navModels) {
      var categories = new Map();

      for (var _iterator = navModels, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var model = _ref;

        var _routes = categories.get(model.settings.category);

        if (!_routes) {
          categories.set(model.settings.category, _routes = []);
        }

        _routes.push(model);
      }

      return categories;
    };

    return CategoriesValueConverter;
  }();
});
define('settings/routes',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var adminHome = {
    title: 'Admin Home',
    iconClass: 'fa-home'
  };

  var channels = {
    title: 'Channels',
    iconClass: 'fa-external-link'
  };

  var settings = {
    title: 'Settings',
    iconClass: 'fa-cog'
  };

  exports.default = [{ route: '', moduleId: './overview/index', title: 'Overview', nav: true, settings: { category: adminHome } }, { route: 'email', moduleId: './email/index', title: 'Email', nav: true, settings: { category: channels } }, { route: 'web-portal', moduleId: './webportal/index', title: 'Web Portal', nav: true, settings: { category: channels } }, { route: 'twitter', moduleId: './twitter/index', title: 'Twitter', nav: true, settings: { category: channels } }, { route: 'facebook', moduleId: './facebook/index', title: 'Facebook', nav: true, settings: { category: channels } }, { route: 'feedback-tab', moduleId: './feedbacktab/index', title: 'Feedback Tab', nav: true, settings: { category: channels } }, { route: 'api', moduleId: './api/index', title: 'API', nav: true, settings: { category: channels } }, { route: 'account', moduleId: './account/index', title: 'Account', nav: true, settings: { category: settings } }, { route: 'subscription', moduleId: './subscription/index', title: 'Subscription', nav: true, settings: { category: channels } }, { route: 'security', moduleId: './security/index', title: 'Security', nav: true, settings: { category: settings } }];
});
define('shell/routes',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = [{
    name: 'home',
    route: ['', 'home'],
    moduleId: 'home/home',
    nav: true,
    title: 'Home',
    settings: { iconClass: 'fa-home' }
  }, {
    route: 'tickets',
    moduleId: 'tickets/tickets',
    nav: true,
    settings: { iconClass: 'fa-ticket' }
  }, {
    name: 'thread',
    route: 'tickets/:id',
    moduleId: 'tickets/thread'
  }, {
    name: 'user',
    route: ['users', 'users/:id'],
    moduleId: 'users/users',
    href: '#users',
    nav: true,
    title: 'Users',
    settings: { iconClass: 'fa-group' }
  }, {
    name: 'settings',
    route: 'settings',
    moduleId: 'settings/index',
    href: '#settings',
    nav: true,
    settings: { iconClass: 'fa-cog' }
  }, {
    name: 'help',
    route: 'help',
    moduleId: 'help/help'
  }];
});
define('shell/shell',['exports', 'aurelia-framework', 'backend/server', 'resources/messages/tab-opened', './routes', 'resources/dialogs/common-dialogs'], function (exports, _aureliaFramework, _server, _tabOpened, _routes, _commonDialogs) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Shell = undefined;

  var _routes2 = _interopRequireDefault(_routes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Shell = exports.Shell = (_dec = (0, _aureliaFramework.inject)(_aureliaFramework.Aurelia, _server.User, _commonDialogs.CommonDialogs), _dec(_class = function () {
    function Shell(aurelia, user, commonDialogs) {
      _classCallCheck(this, Shell);

      this.aurelia = aurelia;
      this.user = user;
      this.tabs = [];
      this.commonDialogs = commonDialogs;
    }

    Shell.prototype.configureRouter = function configureRouter(config, router) {
      this.router = router;
      config.map(_routes2.default);
    };

    Shell.prototype.bind = function bind() {
      var _this = this;

      this.navigationCompleteSub = this.aurelia.subscribe('router:navigation:complete', function (msg) {
        return _this.onNavigationComplete(msg);
      });
      this.tabOpenedSub = this.aurelia.subscribe(_tabOpened.TabOpened, function (msg) {
        return _this.onTabOpened(msg);
      });
    };

    Shell.prototype.unbind = function unbind() {
      this.navigationCompleteSub.dispose();
      this.tabOpenedSub.dispose();
    };

    Shell.prototype.closeTab = function closeTab(tab) {
      var index = this.tabs.indexOf(tab);

      if (index === -1) {
        return;
      }

      this.tabs.splice(index, 1);

      if (!tab.isActive) {
        return;
      }

      var next = this.tabs[0];

      if (next) {
        this.router.navigateToRoute(next.route, next.params, true);
      } else {
        this.router.navigateToRoute('home', true);
      }
    };

    Shell.prototype.logout = function logout() {
      var _this2 = this;

      if (this.tabs.length > 0) {
        var message = "You have tabs open. Are you sure you want to log out?";
        this.commonDialogs.showMessage(message, 'Logout', ['Yes', 'No']).then(function (response) {
          if (!response.wasCancelled) {
            _this2._doLogout();
          }
        });
      } else {
        this._doLogout();
      }
    };

    Shell.prototype._doLogout = function _doLogout() {
      this.aurelia.setRoot('login/login');
      this.aurelia.container.unregister(_server.User);
      this.router.reset();
      this.router.deactivate();
      this.tabs = [];
    };

    Shell.prototype.onTabOpened = function onTabOpened(tab) {
      var existing = this.tabs.find(function (x) {
        return x.matches(tab);
      });

      if (!existing) {
        this.tabs.push(tab);
      }
    };

    Shell.prototype.onNavigationComplete = function onNavigationComplete(msg) {
      if (!msg.result.completed) {
        return;
      }

      this.tabs.forEach(function (x) {
        return x.updateActivation(msg.instruction);
      });
    };

    return Shell;
  }()) || _class);
});
define('tickets/thread',['exports', 'aurelia-framework', 'aurelia-event-aggregator', 'aurelia-router', 'resources/dialogs/common-dialogs', 'resources/messages/tab-opened', 'backend/server'], function (exports, _aureliaFramework, _aureliaEventAggregator, _aureliaRouter, _commonDialogs, _tabOpened, _server) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Thread = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Thread = exports.Thread = (_dec = (0, _aureliaFramework.inject)(_server.Server, _aureliaRouter.Router, _commonDialogs.CommonDialogs, _aureliaEventAggregator.EventAggregator, _server.User), _dec(_class = function () {
    function Thread(server, router, commonDialogs, eventAggregator, user) {
      _classCallCheck(this, Thread);

      this.server = server;
      this.router = router;
      this.commonDialogs = commonDialogs;
      this.eventAggregator = eventAggregator;
      this.user = user;
    }

    Thread.prototype.getParticipant = function getParticipant(id) {
      return this.ticket.participants.find(function (x) {
        return x.id == id;
      });
    };

    Thread.prototype.save = function save() {
      var _this = this;

      var isNew = this.ticket.id == 0;
      this.server.saveTicket(this.ticket).then(function (ticket) {
        _this.ticket = ticket;

        if (isNew) {
          _this.router.navigateToRoute('thread', { id: ticket.id }, { replace: true, trigger: false });
          _this.eventAggregator.publish(new _tabOpened.TabOpened(ticket.title, 'thread', { id: ticket.id }));
        }
      });
    };

    Thread.prototype.submit = function submit(status) {
      if (this.message) {
        if (!this.getParticipant(this.user.id)) {
          this.ticket.participants.push(this.user);
        }

        this.ticket.posts.unshift({
          createdAt: new Date(),
          fromId: this.user.id,
          content: this.message
        });

        this.message = '';
      }

      this.ticket.status = status;
      this.save();
    };

    Thread.prototype.canActivate = function canActivate(params) {
      var _this2 = this;

      if (params.id == 'new') {
        if (params.title) {
          this.ticket = this.server.createTicket(params.title);
          this.from = this.getParticipant(this.ticket.fromId);
          return true;
        }

        return this.commonDialogs.prompt().then(function (response) {
          if (response.wasCancelled) {
            return false;
          }

          return new _aureliaRouter.RedirectToRoute('thread', { id: 'new', title: response.output });
        });
      }

      return this.server.getTicketDetails(parseInt(params.id)).then(function (ticket) {
        if (ticket) {
          _this2.ticket = ticket;
          _this2.from = _this2.getParticipant(ticket.fromId);
          _this2.eventAggregator.publish(new _tabOpened.TabOpened(ticket.title, 'thread', { id: ticket.id }));
          return true;
        }

        return new _aureliaRouter.RedirectToRoute('home');
      });
    };

    Thread.prototype.activate = function activate(params) {
      this.message = '';
    };

    Thread.prototype.canDeactivate = function canDeactivate() {
      if (this.ticket.id === 0) {
        var message = 'You have created a ticket but have not yet posted it with a status. If you leave now, your work will be lost. Do you wish to continue?';

        return this.commonDialogs.showMessage(message, 'Ticket Not Saved', ['Yes', 'No']).then(function (response) {
          return !response.wasCancelled;
        });
      }

      return true;
    };

    return Thread;
  }()) || _class);
});
define('tickets/tickets',['exports', 'backend/server', 'aurelia-framework'], function (exports, _server, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Tickets = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Tickets = exports.Tickets = (_dec = (0, _aureliaFramework.inject)(_server.Server), _dec(_class = function () {
    function Tickets(server) {
      _classCallCheck(this, Tickets);

      this.server = server;
    }

    Tickets.prototype.activate = function activate() {
      var _this = this;

      return this.server.getTicketSummaries().then(function (tickets) {
        return _this.tickets = tickets;
      });
    };

    return Tickets;
  }()) || _class);
});
define('users/edit-user-controller',['exports', 'aurelia-framework', 'aurelia-validation', 'resources/bootstrap-form-renderer', 'backend/server'], function (exports, _aureliaFramework, _aureliaValidation, _bootstrapFormRenderer, _server) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.EditUserController = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  var _dec, _dec2, _dec3, _class, _desc, _value, _class2;

  var EditUserController = exports.EditUserController = (_dec = (0, _aureliaFramework.transient)(), _dec2 = (0, _aureliaFramework.inject)(_server.Server, _aureliaFramework.NewInstance.of(_aureliaValidation.ValidationController)), _dec3 = (0, _aureliaFramework.computedFrom)('validationController.errors.length'), _dec(_class = _dec2(_class = (_class2 = function () {
    function EditUserController(server, validationController) {
      _classCallCheck(this, EditUserController);

      this.server = server;
      this.validationController = validationController;
      this.validationController.validateTrigger = _aureliaValidation.validateTrigger.change;
      this.validationController.addRenderer(new _bootstrapFormRenderer.BootstrapFormRenderer());
      this.onSave = function () {};
    }

    EditUserController.prototype.startTracking = function startTracking(original) {
      var _this = this;

      if (original) {
        this.stopTracking();
        this.original = original;
        this.originalJSON = JSON.stringify(original);
        this.isDirty = false;
        this.editable = original.clone();

        _aureliaValidation.ValidationRules.ensure('firstName').displayName('First Name').required().minLength(3).maxLength(10).ensure('lastName').displayName('Last Name').required().minLength(3).maxLength(10).ensure('email').displayName('Email').required().email().on(this.editable);

        this.validationController.reset();

        this._timer = setInterval(function () {
          var currentJSON = JSON.stringify(_this.editable);
          if (currentJSON !== _this.originalJSON) {
            _this.isDirty = true;
          } else if (_this.isDirty) {
            _this.isDirty = false;
          }
        }, 500);
      } else {
        this.original = this.editable = null;
      }
    };

    EditUserController.prototype.stopTracking = function stopTracking() {
      clearInterval(this._timer);
    };

    EditUserController.prototype.validate = function validate() {
      return this.validationController.validate();
    };

    EditUserController.prototype.toggleActiveStatus = function toggleActiveStatus() {
      this.editable.isActive = !this.editable.isActive;
    };

    EditUserController.prototype.commit = function commit(other) {
      this.stopTracking();
      Object.assign(this.original, other || this.editable);
      this.startTracking(this.original);
    };

    EditUserController.prototype.revert = function revert() {
      this.startTracking(this.original);
    };

    EditUserController.prototype.save = function save() {
      var _this2 = this;

      return this.validate().then(function (errors) {
        if (errors.length !== 0) {
          return;
        }

        return _this2.server.saveUser(_this2.editable).then(function (user) {
          _this2.commit(user);
          _this2.onSave(user);
        });
      });
    };

    _createClass(EditUserController, [{
      key: 'isValid',
      get: function get() {
        return this.validationController.errors.length === 0;
      }
    }]);

    return EditUserController;
  }(), (_applyDecoratedDescriptor(_class2.prototype, 'isValid', [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, 'isValid'), _class2.prototype)), _class2)) || _class) || _class);
});
define('users/users',['exports', 'aurelia-framework', 'aurelia-router', 'backend/server', 'resources/dialogs/common-dialogs', './edit-user-controller'], function (exports, _aureliaFramework, _aureliaRouter, _server, _commonDialogs, _editUserController) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Users = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _class;

  var Users = exports.Users = (_dec = (0, _aureliaFramework.inject)(_server.Server, _aureliaRouter.Router, _commonDialogs.CommonDialogs, _editUserController.EditUserController), _dec2 = (0, _aureliaFramework.singleton)(), _dec(_class = _dec2(_class = function () {
    function Users(server, router, commonDialogs, controller) {
      var _this = this;

      _classCallCheck(this, Users);

      this.server = server;
      this.router = router;
      this.commonDialogs = commonDialogs;
      this.controller = controller;
      this.controller.onSave = function (user) {
        return _this.onSave(user);
      };
    }

    Users.prototype.canActivate = function canActivate(params) {
      if (!params.id && this.activeId) {
        return new _aureliaRouter.RedirectToRoute('user', { id: this.activeId });
      }

      return true;
    };

    Users.prototype.activate = function activate(params) {
      var _this2 = this;

      if (!this.users) {
        return Promise.all([this.load(params.id), this.server.getUserSummaries().then(function (users) {
          return _this2.users = users;
        })]);
      } else {
        return this.load(params.id);
      }
    };

    Users.prototype.load = function load(id) {
      var _this3 = this;

      if (id == 'new') {
        this.activeId = 0;
        this.controller.startTracking(this.server.createUser());
      } else if (id) {
        this.activeId = parseInt(id);
        return this.server.getUser(this.activeId).then(function (user) {
          _this3.controller.startTracking(user);
        });
      } else {
        this.activeId = 0;
        this.controller.startTracking(null);
      }
    };

    Users.prototype.onSave = function onSave(user) {
      if (this.activeId == 0) {
        this.users.unshift(user);
        this.activeId = user.id;
        this.router.navigateToRoute('user', { id: user.id }, { replace: true, trigger: false });
      } else {
        var existing = this.users.find(function (c) {
          return c.id == user.id;
        });
        var index = this.users.indexOf(existing);
        this.users.splice(index, 1, user);
      }
    };

    Users.prototype.canDeactivate = function canDeactivate() {
      if (this.controller.isDirty) {
        var message = 'You have made changes. If you leave now, these changes will be lost. Do you wish to continue?';

        return this.commonDialogs.showMessage(message, 'User Has Changed', ['Yes', 'No']).then(function (response) {
          return !response.wasCancelled;
        });
      }

      return true;
    };

    Users.prototype.deactivate = function deactivate() {
      this.controller.revert();
      this.controller.stopTracking();
    };

    return Users;
  }()) || _class) || _class);
});
define('resources/dialogs/common-dialogs',['exports', 'aurelia-framework', 'aurelia-dialog', './message-box', './prompt'], function (exports, _aureliaFramework, _aureliaDialog, _messageBox, _prompt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.CommonDialogs = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var CommonDialogs = exports.CommonDialogs = (_dec = (0, _aureliaFramework.inject)(_aureliaDialog.DialogService), _dec(_class = function () {
    function CommonDialogs(dialogService) {
      _classCallCheck(this, CommonDialogs);

      this.dialogService = dialogService;
    }

    CommonDialogs.prototype.showMessage = function showMessage(message) {
      var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Message';
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ['Ok'];

      return this.dialogService.open({ viewModel: _messageBox.MessageBox, model: { message: message, title: title, options: options } });
    };

    CommonDialogs.prototype.prompt = function prompt(message) {
      var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Prompt';

      return this.dialogService.open({ viewModel: _prompt.Prompt, model: { message: message, title: title } });
    };

    return CommonDialogs;
  }()) || _class);
});
define('resources/dialogs/message-box',['exports', 'aurelia-dialog', 'aurelia-framework'], function (exports, _aureliaDialog, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MessageBox = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var MessageBox = exports.MessageBox = (_dec = (0, _aureliaFramework.inject)(_aureliaDialog.DialogController), _dec(_class = function () {
    function MessageBox(dialogController) {
      _classCallCheck(this, MessageBox);

      this.dialogController = dialogController;
    }

    MessageBox.prototype.activate = function activate(model) {
      this.model = model;
    };

    MessageBox.prototype.selectOption = function selectOption(option) {
      if (isCancel(option)) {
        this.dialogController.cancel(option);
      } else {
        this.dialogController.ok(option);
      }
    };

    return MessageBox;
  }()) || _class);


  function isCancel(option) {
    return ['cancel', 'no'].indexOf(option.toLowerCase()) !== -1;
  }
});
define('resources/dialogs/prompt',['exports', 'aurelia-dialog', 'aurelia-framework'], function (exports, _aureliaDialog, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Prompt = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Prompt = exports.Prompt = (_dec = (0, _aureliaFramework.inject)(_aureliaDialog.DialogController), _dec(_class = function () {
    function Prompt(dialogController) {
      _classCallCheck(this, Prompt);

      this.dialogController = dialogController;
      this.answer = null;
    }

    Prompt.prototype.activate = function activate(model) {
      this.model = model;
    };

    Prompt.prototype.ok = function ok() {
      if (this.answer) {
        this.dialogController.ok(this.answer);
      }
    };

    Prompt.prototype.cancel = function cancel() {
      this.dialogController.cancel();
    };

    return Prompt;
  }()) || _class);
});
define('resources/messages/tab-opened',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var TabOpened = exports.TabOpened = function () {
    function TabOpened(title, route, params) {
      _classCallCheck(this, TabOpened);

      this.title = title;
      this.route = route;
      this.params = params || {};
      this.isActive = true;
    }

    TabOpened.prototype.updateActivation = function updateActivation(instruction) {
      if (this.route !== instruction.config.name) {
        this.isActive = false;
        return;
      }

      var params = instruction.params;

      for (var key in params) {
        if (params[key] !== this.params[key].toString()) {
          this.isActive = false;
          return;
        }
      }

      this.isActive = true;
    };

    TabOpened.prototype.matches = function matches(other) {
      if (this.route !== other.route) {
        return false;
      }

      for (var key in other.params) {
        if (other.params[key] !== this.params[key]) {
          return false;
        }
      }

      return true;
    };

    return TabOpened;
  }();
});
define('resources/elements/bar-chart',['exports', './chart-element'], function (exports, _chartElement) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.BarChart = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var BarChart = exports.BarChart = (_dec = (0, _chartElement.chartElement)('Bar'), _dec(_class = function BarChart() {
    _classCallCheck(this, BarChart);
  }) || _class);
});
define('resources/elements/chart-data',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ChartData = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;

  var ChartData = exports.ChartData = (_dec = (0, _aureliaFramework.noView)(), _dec(_class = (_class2 = function ChartData() {
    _classCallCheck(this, ChartData);

    _initDefineProp(this, 'data', _descriptor, this);

    _initDefineProp(this, 'label', _descriptor2, this);

    _initDefineProp(this, 'fillColor', _descriptor3, this);

    _initDefineProp(this, 'strokeColor', _descriptor4, this);

    _initDefineProp(this, 'pointStrokeColor', _descriptor5, this);

    _initDefineProp(this, 'pointHighlightFill', _descriptor6, this);

    _initDefineProp(this, 'pointHighlightStroke', _descriptor7, this);

    _initDefineProp(this, 'highlightFill', _descriptor8, this);

    _initDefineProp(this, 'highlightStroke', _descriptor9, this);
  }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'data', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return [];
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'label', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return '';
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'fillColor', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return 'rgba(220,220,220,0.2)';
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'strokeColor', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return 'rgba(220,220,220,1)';
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'pointStrokeColor', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return "#fff";
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'pointHighlightFill', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return "#fff";
    }
  }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'pointHighlightStroke', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return "rgba(220,220,220,1)";
    }
  }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'highlightFill', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return 'rgba(220,220,220,1)';
    }
  }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'highlightStroke', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return 'rgba(220,220,220,1)';
    }
  })), _class2)) || _class);
});
define('resources/elements/chart-element',['exports', 'chartjs', 'aurelia-framework'], function (exports, _chartjs, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.chartElement = chartElement;

  var _chartjs2 = _interopRequireDefault(_chartjs);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function chartElement(api) {
    return function (target) {
      (0, _aureliaFramework.bindable)('labels')(target);
      (0, _aureliaFramework.children)({ selector: 'chart-data', name: 'datasets' })(target);
      (0, _aureliaFramework.inlineView)('\n    <template>\n      <canvas ref="canvas"></canvas>\n      <slot></slot>\n    </template>\n    ')(target);

      target.prototype.bind = function () {
        this.context = this.canvas.getContext('2d');
      };

      target.prototype.attached = function () {
        this.render();
      };

      target.prototype.render = function () {
        if (this.chart) {
          this.chart.destroy();
        }

        var data = {
          labels: this.labels,
          datasets: this.datasets
        };

        this.chart = new _chartjs2.default(this.context)[api](data);
      };

      target.prototype.detached = function () {
        if (this.chart) {
          this.chart.destroy();
        }
      };
    };
  }
});
define('resources/elements/data-grid',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DataGrid = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _class;

  var DataGrid = exports.DataGrid = (_dec = (0, _aureliaFramework.inject)(Element), _dec2 = (0, _aureliaFramework.processContent)(parseColumns), _dec(_class = _dec2(_class = function () {
    function DataGrid(element) {
      var _this = this;

      _classCallCheck(this, DataGrid);

      this.element = element;
      this.onResize = function () {
        return _this.size();
      };
    }

    DataGrid.prototype.bind = function bind() {
      window.addEventListener('resize', this.onResize);
    };

    DataGrid.prototype.attached = function attached() {
      this.headerCells = this.element.getElementsByClassName('header-row')[0].children;
      this.sizingCells = this.element.getElementsByClassName('sizing-row')[0].children;
      this.size();
    };

    DataGrid.prototype.unbind = function unbind() {
      window.removeEventListener('resize', this.onResize);
    };

    DataGrid.prototype.size = function size() {
      for (var i = 0, ii = this.headerCells.length - 1; i < ii; ++i) {
        this.sizingCells[i].style.width = this.headerCells[i].offsetWidth + 'px';
      }
    };

    return DataGrid;
  }()) || _class) || _class);


  function parseColumns(compiler, resources, node, instruction) {
    var columns = node.querySelectorAll('grid-column');
    var headerCells = '';
    var dataCells = '';
    var sizingCells = '';
    var itemsExpression = node.getAttribute('items.bind');

    node.removeAttribute('items.bind');

    for (var i = 0, ii = columns.length; i < ii; ++i) {
      var column = columns[i];
      var cellTemplate = void 0;

      headerCells += '<th>' + column.getAttribute('heading') + '</th>';
      sizingCells += '<td></td>';
      cellTemplate = column.innerHTML.trim();

      if (cellTemplate) {
        dataCells += '<td>' + cellTemplate + '</td>';
      } else {
        dataCells += '<td>${item.' + column.getAttribute('property') + '}</td>';
      }
    }

    node.innerHTML = '\n  <table class="grid-header table">\n    <thead>\n      <tr class="header-row">' + headerCells + '</tr>\n    </thead>\n  </table>\n  <div class="grid-container">\n    <table class="grid-rows table table-striped">\n      <tbody>\n        <tr class="sizing-row">' + sizingCells + '</tr>\n        <tr repeat.for="item of ' + itemsExpression + '" class="item-row">' + dataCells + '</tr>\n      </tbody>\n    </table>\n  </div>\n  ';

    return true;
  }
});
define('resources/elements/line-chart',['exports', './chart-element'], function (exports, _chartElement) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.LineChart = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var LineChart = exports.LineChart = (_dec = (0, _chartElement.chartElement)('Line'), _dec(_class = function LineChart() {
    _classCallCheck(this, LineChart);
  }) || _class);
});
define('resources/elements/rich-text-editor',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.RichTextEditor = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor;

  CKEDITOR.config.skin = 'bootstrapck';

  var RichTextEditor = exports.RichTextEditor = (_dec = (0, _aureliaFramework.inject)(Element, _aureliaFramework.TaskQueue), _dec2 = (0, _aureliaFramework.noView)(), _dec3 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec(_class = _dec2(_class = (_class2 = function () {
    function RichTextEditor(element, taskQueue) {
      _classCallCheck(this, RichTextEditor);

      _initDefineProp(this, 'value', _descriptor, this);

      this.element = element;
      this.taskQueue = taskQueue;
      this.guard = false;
    }

    RichTextEditor.prototype.created = function created(owningView) {
      var _this = this;

      var original = owningView.removeNodes;
      var that = this;

      owningView.removeNodes = function () {
        _this.editor.destroy();
        original.call(owningView);
      };
    };

    RichTextEditor.prototype.bind = function bind() {
      var _this2 = this;

      this.editor = CKEDITOR.appendTo(this.element, { removePlugins: 'resize, elementspath' }, this.value);

      this.editor.on('change', function () {
        var newValue = _this2.editor.getData();

        if (_this2.value === newValue) {
          return;
        }

        _this2.guard = true;
        _this2.value = newValue;
        _this2.taskQueue.queueMicroTask(function () {
          return _this2.guard = false;
        });
      });
    };

    RichTextEditor.prototype.valueChanged = function valueChanged(newValue, oldValue) {
      if (this.guard || !this.editor) {
        return;
      }

      this.editor.setData(newValue);
    };

    return RichTextEditor;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec3], {
    enumerable: true,
    initializer: null
  })), _class2)) || _class) || _class);
});
define('resources/value-converters/activity-type-to-route',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ActivityTypeToRouteValueConverter = exports.ActivityTypeToRouteValueConverter = function () {
    function ActivityTypeToRouteValueConverter() {
      _classCallCheck(this, ActivityTypeToRouteValueConverter);
    }

    ActivityTypeToRouteValueConverter.prototype.toView = function toView(value) {
      switch (value) {
        case 'ticket':
          return 'thread';
        default:
          throw new Error('Unknown ticket type: ' + value + '.');
      }
    };

    return ActivityTypeToRouteValueConverter;
  }();
});
define('resources/value-converters/date',['exports', 'moment'], function (exports, _moment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DateValueConverter = undefined;

  var _moment2 = _interopRequireDefault(_moment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var DateValueConverter = exports.DateValueConverter = function () {
    function DateValueConverter() {
      _classCallCheck(this, DateValueConverter);
    }

    DateValueConverter.prototype.toView = function toView(value) {
      var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'dddd, MMMM D, YYYY';

      return (0, _moment2.default)(value).format(format);
    };

    return DateValueConverter;
  }();
});
define('settings/account/index',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Index = exports.Index = function Index() {
    _classCallCheck(this, Index);

    this.heading = 'Account';
  };
});
define('settings/api/index',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Index = exports.Index = function Index() {
    _classCallCheck(this, Index);

    this.heading = 'API';
  };
});
define('settings/email/index',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Index = exports.Index = function Index() {
    _classCallCheck(this, Index);

    this.heading = 'Email';
  };
});
define('settings/facebook/index',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Index = exports.Index = function Index() {
    _classCallCheck(this, Index);

    this.heading = 'Facebook';
  };
});
define('settings/feedbacktab/index',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Index = exports.Index = function Index() {
    _classCallCheck(this, Index);

    this.heading = 'Feedback Tab';
  };
});
define('settings/overview/index',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Index = exports.Index = function Index() {
    _classCallCheck(this, Index);

    this.heading = 'Overview';
  };
});
define('settings/security/index',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Index = exports.Index = function Index() {
    _classCallCheck(this, Index);

    this.heading = 'Security';
  };
});
define('settings/subscription/index',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Index = exports.Index = function Index() {
    _classCallCheck(this, Index);

    this.heading = 'Subscription';
  };
});
define('settings/twitter/index',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Index = exports.Index = function Index() {
    _classCallCheck(this, Index);

    this.heading = 'Twitter';
  };
});
define('settings/webportal/index',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Index = exports.Index = function Index() {
    _classCallCheck(this, Index);

    this.heading = 'Web Portal';
  };
});
define('resources/data/countries',["exports", "aurelia-templating"], function (exports, _aureliaTemplating) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.CountryBinder = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var countries = [{ abbreviation: "AF", name: "Afghanistan" }, { abbreviation: "AL", name: "Albania" }, { abbreviation: "DZ", name: "Algeria" }, { abbreviation: "AS", name: "American Samoa" }, { abbreviation: "AD", name: "Andorra" }, { abbreviation: "AO", name: "Angola" }, { abbreviation: "AI", name: "Anguilla" }, { abbreviation: "AQ", name: "Antarctica" }, { abbreviation: "AG", name: "Antigua and Barbuda" }, { abbreviation: "AR", name: "Argentina" }, { abbreviation: "AM", name: "Armenia" }, { abbreviation: "AW", name: "Aruba" }, { abbreviation: "AU", name: "Australia" }, { abbreviation: "AT", name: "Austria" }, { abbreviation: "AZ", name: "Azerbaijan" }, { abbreviation: "BS", name: "Bahamas" }, { abbreviation: "BH", name: "Bahrain" }, { abbreviation: "BD", name: "Bangladesh" }, { abbreviation: "BB", name: "Barbados" }, { abbreviation: "BY", name: "Belarus" }, { abbreviation: "BE", name: "Belgium" }, { abbreviation: "BZ", name: "Belize" }, { abbreviation: "BJ", name: "Benin" }, { abbreviation: "BM", name: "Bermuda" }, { abbreviation: "BT", name: "Bhutan" }, { abbreviation: "BO", name: "Bolivia" }, { abbreviation: "BA", name: "Bosnia and Herzegowina" }, { abbreviation: "BW", name: "Botswana" }, { abbreviation: "BV", name: "Bouvet Island" }, { abbreviation: "BR", name: "Brazil" }, { abbreviation: "IO", name: "British Indian Ocean Territory" }, { abbreviation: "BN", name: "Brunei Darussalam" }, { abbreviation: "BG", name: "Bulgaria" }, { abbreviation: "BF", name: "Burkina Faso" }, { abbreviation: "BI", name: "Burundi" }, { abbreviation: "KH", name: "Cambodia" }, { abbreviation: "CM", name: "Cameroon" }, { abbreviation: "CA", name: "Canada" }, { abbreviation: "CV", name: "Cape Verde" }, { abbreviation: "KY", name: "Cayman Islands" }, { abbreviation: "CF", name: "Central African Republic" }, { abbreviation: "TD", name: "Chad" }, { abbreviation: "CL", name: "Chile" }, { abbreviation: "CN", name: "China" }, { abbreviation: "CX", name: "Christmas Island" }, { abbreviation: "CC", name: "Cocos (Keeling) Islands" }, { abbreviation: "CO", name: "Colombia" }, { abbreviation: "KM", name: "Comoros" }, { abbreviation: "CG", name: "Congo" }, { abbreviation: "CD", name: "Congo, the Democratic Republic of the" }, { abbreviation: "CK", name: "Cook Islands" }, { abbreviation: "CR", name: "Costa Rica" }, { abbreviation: "CI", name: "Cote d'Ivoire" }, { abbreviation: "HR", name: "Croatia (Hrvatska)" }, { abbreviation: "CU", name: "Cuba" }, { abbreviation: "CY", name: "Cyprus" }, { abbreviation: "CZ", name: "Czech Republic" }, { abbreviation: "DK", name: "Denmark" }, { abbreviation: "DJ", name: "Djibouti" }, { abbreviation: "DM", name: "Dominica" }, { abbreviation: "DO", name: "Dominican Republic" }, { abbreviation: "TP", name: "East Timor" }, { abbreviation: "EC", name: "Ecuador" }, { abbreviation: "EG", name: "Egypt" }, { abbreviation: "SV", name: "El Salvador" }, { abbreviation: "GQ", name: "Equatorial Guinea" }, { abbreviation: "ER", name: "Eritrea" }, { abbreviation: "EE", name: "Estonia" }, { abbreviation: "ET", name: "Ethiopia" }, { abbreviation: "FK", name: "Falkland Islands (Malvinas)" }, { abbreviation: "FO", name: "Faroe Islands" }, { abbreviation: "FJ", name: "Fiji" }, { abbreviation: "FI", name: "Finland" }, { abbreviation: "FR", name: "France" }, { abbreviation: "FX", name: "France, Metropolitan" }, { abbreviation: "GF", name: "French Guiana" }, { abbreviation: "PF", name: "French Polynesia" }, { abbreviation: "TF", name: "French Southern Territories" }, { abbreviation: "GA", name: "Gabon" }, { abbreviation: "GM", name: "Gambia" }, { abbreviation: "GE", name: "Georgia" }, { abbreviation: "DE", name: "Germany" }, { abbreviation: "GH", name: "Ghana" }, { abbreviation: "GI", name: "Gibraltar" }, { abbreviation: "GR", name: "Greece" }, { abbreviation: "GL", name: "Greenland" }, { abbreviation: "GD", name: "Grenada" }, { abbreviation: "GP", name: "Guadeloupe" }, { abbreviation: "GU", name: "Guam" }, { abbreviation: "GT", name: "Guatemala" }, { abbreviation: "GN", name: "Guinea" }, { abbreviation: "GW", name: "Guinea-Bissau" }, { abbreviation: "GY", name: "Guyana" }, { abbreviation: "HT", name: "Haiti" }, { abbreviation: "HM", name: "Heard and Mc Donald Islands" }, { abbreviation: "VA", name: "Holy See (Vatican City State)" }, { abbreviation: "HN", name: "Honduras" }, { abbreviation: "HK", name: "Hong Kong" }, { abbreviation: "HU", name: "Hungary" }, { abbreviation: "IS", name: "Iceland" }, { abbreviation: "IN", name: "India" }, { abbreviation: "ID", name: "Indonesia" }, { abbreviation: "IR", name: "Iran (Islamic Republic of)" }, { abbreviation: "IQ", name: "Iraq" }, { abbreviation: "IE", name: "Ireland" }, { abbreviation: "IL", name: "Israel" }, { abbreviation: "IT", name: "Italy" }, { abbreviation: "JM", name: "Jamaica" }, { abbreviation: "JP", name: "Japan" }, { abbreviation: "JO", name: "Jordan" }, { abbreviation: "KZ", name: "Kazakhstan" }, { abbreviation: "KE", name: "Kenya" }, { abbreviation: "KI", name: "Kiribati" }, { abbreviation: "KP", name: "Korea, Democratic People's Republic of" }, { abbreviation: "KR", name: "Korea, Republic of" }, { abbreviation: "KW", name: "Kuwait" }, { abbreviation: "KG", name: "Kyrgyzstan" }, { abbreviation: "LA", name: "Lao People's Democratic Republic" }, { abbreviation: "LV", name: "Latvia" }, { abbreviation: "LB", name: "Lebanon" }, { abbreviation: "LS", name: "Lesotho" }, { abbreviation: "LR", name: "Liberia" }, { abbreviation: "LY", name: "Libyan Arab Jamahiriya" }, { abbreviation: "LI", name: "Liechtenstein" }, { abbreviation: "LT", name: "Lithuania" }, { abbreviation: "LU", name: "Luxembourg" }, { abbreviation: "MO", name: "Macau" }, { abbreviation: "MK", name: "Macedonia, The Former Yugoslav Republic of" }, { abbreviation: "MG", name: "Madagascar" }, { abbreviation: "MW", name: "Malawi" }, { abbreviation: "MY", name: "Malaysia" }, { abbreviation: "MV", name: "Maldives" }, { abbreviation: "ML", name: "Mali" }, { abbreviation: "MT", name: "Malta" }, { abbreviation: "MH", name: "Marshall Islands" }, { abbreviation: "MQ", name: "Martinique" }, { abbreviation: "MR", name: "Mauritania" }, { abbreviation: "MU", name: "Mauritius" }, { abbreviation: "YT", name: "Mayotte" }, { abbreviation: "MX", name: "Mexico" }, { abbreviation: "FM", name: "Micronesia, Federated States of" }, { abbreviation: "MD", name: "Moldova, Republic of" }, { abbreviation: "MC", name: "Monaco" }, { abbreviation: "MN", name: "Mongolia" }, { abbreviation: "MS", name: "Montserrat" }, { abbreviation: "MA", name: "Morocco" }, { abbreviation: "MZ", name: "Mozambique" }, { abbreviation: "MM", name: "Myanmar" }, { abbreviation: "NA", name: "Namibia" }, { abbreviation: "NR", name: "Nauru" }, { abbreviation: "NP", name: "Nepal" }, { abbreviation: "NL", name: "Netherlands" }, { abbreviation: "AN", name: "Netherlands Antilles" }, { abbreviation: "NC", name: "New Caledonia" }, { abbreviation: "NZ", name: "New Zealand" }, { abbreviation: "NI", name: "Nicaragua" }, { abbreviation: "NE", name: "Niger" }, { abbreviation: "NG", name: "Nigeria" }, { abbreviation: "NU", name: "Niue" }, { abbreviation: "NF", name: "Norfolk Island" }, { abbreviation: "MP", name: "Northern Mariana Islands" }, { abbreviation: "NO", name: "Norway" }, { abbreviation: "OM", name: "Oman" }, { abbreviation: "PK", name: "Pakistan" }, { abbreviation: "PW", name: "Palau" }, { abbreviation: "PA", name: "Panama" }, { abbreviation: "PG", name: "Papua New Guinea" }, { abbreviation: "PY", name: "Paraguay" }, { abbreviation: "PE", name: "Peru" }, { abbreviation: "PH", name: "Philippines" }, { abbreviation: "PN", name: "Pitcairn" }, { abbreviation: "PL", name: "Poland" }, { abbreviation: "PT", name: "Portugal" }, { abbreviation: "PR", name: "Puerto Rico" }, { abbreviation: "QA", name: "Qatar" }, { abbreviation: "RE", name: "Reunion" }, { abbreviation: "RO", name: "Romania" }, { abbreviation: "RU", name: "Russian Federation" }, { abbreviation: "RW", name: "Rwanda" }, { abbreviation: "KN", name: "Saint Kitts and Nevis" }, { abbreviation: "LC", name: "Saint LUCIA" }, { abbreviation: "VC", name: "Saint Vincent and the Grenadines" }, { abbreviation: "WS", name: "Samoa" }, { abbreviation: "SM", name: "San Marino" }, { abbreviation: "ST", name: "Sao Tome and Principe" }, { abbreviation: "SA", name: "Saudi Arabia" }, { abbreviation: "SN", name: "Senegal" }, { abbreviation: "SC", name: "Seychelles" }, { abbreviation: "SL", name: "Sierra Leone" }, { abbreviation: "SG", name: "Singapore" }, { abbreviation: "SK", name: "Slovakia (Slovak Republic)" }, { abbreviation: "SI", name: "Slovenia" }, { abbreviation: "SB", name: "Solomon Islands" }, { abbreviation: "SO", name: "Somalia" }, { abbreviation: "ZA", name: "South Africa" }, { abbreviation: "GS", name: "South Georgia and the South Sandwich Islands" }, { abbreviation: "ES", name: "Spain" }, { abbreviation: "LK", name: "Sri Lanka" }, { abbreviation: "SH", name: "St. Helena" }, { abbreviation: "PM", name: "St. Pierre and Miquelon" }, { abbreviation: "SD", name: "Sudan" }, { abbreviation: "SR", name: "Suriname" }, { abbreviation: "SJ", name: "Svalbard and Jan Mayen Islands" }, { abbreviation: "SZ", name: "Swaziland" }, { abbreviation: "SE", name: "Sweden" }, { abbreviation: "CH", name: "Switzerland" }, { abbreviation: "SY", name: "Syrian Arab Republic" }, { abbreviation: "TW", name: "Taiwan, Province of China" }, { abbreviation: "TJ", name: "Tajikistan" }, { abbreviation: "TZ", name: "Tanzania, United Republic of" }, { abbreviation: "TH", name: "Thailand" }, { abbreviation: "TG", name: "Togo" }, { abbreviation: "TK", name: "Tokelau" }, { abbreviation: "TO", name: "Tonga" }, { abbreviation: "TT", name: "Trinidad and Tobago" }, { abbreviation: "TN", name: "Tunisia" }, { abbreviation: "TR", name: "Turkey" }, { abbreviation: "TM", name: "Turkmenistan" }, { abbreviation: "TC", name: "Turks and Caicos Islands" }, { abbreviation: "TV", name: "Tuvalu" }, { abbreviation: "UG", name: "Uganda" }, { abbreviation: "UA", name: "Ukraine" }, { abbreviation: "AE", name: "United Arab Emirates" }, { abbreviation: "GB", name: "United Kingdom" }, { abbreviation: "US", name: "United States" }, { abbreviation: "UM", name: "United States Minor Outlying Islands" }, { abbreviation: "UY", name: "Uruguay" }, { abbreviation: "UZ", name: "Uzbekistan" }, { abbreviation: "VU", name: "Vanuatu" }, { abbreviation: "VE", name: "Venezuela" }, { abbreviation: "VN", name: "Viet Nam" }, { abbreviation: "VG", name: "Virgin Islands (British)" }, { abbreviation: "VI", name: "Virgin Islands (U.S.)" }, { abbreviation: "WF", name: "Wallis and Futuna Islands" }, { abbreviation: "EH", name: "Western Sahara" }, { abbreviation: "YE", name: "Yemen" }, { abbreviation: "YU", name: "Yugoslavia" }, { abbreviation: "ZM", name: "Zambia" }, { abbreviation: "ZW", name: "Zimbabwe" }];

  var CountryBinder = exports.CountryBinder = (_dec = (0, _aureliaTemplating.viewEngineHooks)(), _dec(_class = function () {
    function CountryBinder() {
      _classCallCheck(this, CountryBinder);
    }

    CountryBinder.prototype.beforeBind = function beforeBind(view) {
      view.overrideContext.countries = countries;
    };

    return CountryBinder;
  }()) || _class);
});
define('resources/data/timezones',["exports", "aurelia-templating"], function (exports, _aureliaTemplating) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.TimeZoneBinder = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var timezones = [{ value: "-12.0", display: "(GMT -12:00) Eniwetok, Kwajalein" }, { value: "-11.0", display: "(GMT -11:00) Midway Island, Samoa" }, { value: "-10.0", display: "(GMT -10:00) Hawaii" }, { value: "-9.0", display: "(GMT -9:00) Alaska" }, { value: "-8.0", display: "(GMT -8:00) Pacific Time (US & Canada)" }, { value: "-7.0", display: "(GMT -7:00) Mountain Time (US & Canada)" }, { value: "-6.0", display: "(GMT -6:00) Central Time (US & Canada), Mexico City" }, { value: "-5.0", display: "(GMT -5:00) Eastern Time (US & Canada), Bogota, Lima" }, { value: "-4.0", display: "(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz" }, { value: "-3.5", display: "(GMT -3:30) Newfoundland" }, { value: "-3.0", display: "(GMT -3:00) Brazil, Buenos Aires, Georgetown" }, { value: "-2.0", display: "(GMT -2:00) Mid-Atlantic" }, { value: "-1.0", display: "(GMT -1:00 hour) Azores, Cape Verde Islands" }, { value: "0.0", display: "(GMT) Western Europe Time, London, Lisbon, Casablanca" }, { value: "1.0", display: "(GMT +1:00 hour) Brussels, Copenhagen, Madrid, Paris" }, { value: "2.0", display: "(GMT +2:00) Kaliningrad, South Africa" }, { value: "3.0", display: "(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg" }, { value: "3.5", display: "(GMT +3:30) Tehran" }, { value: "4.0", display: "(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi" }, { value: "4.5", display: "(GMT +4:30) Kabul" }, { value: "5.0", display: "(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent" }, { value: "5.5", display: "(GMT +5:30) Bombay, Calcutta, Madras, New Delhi" }, { value: "5.75", display: "(GMT +5:45) Kathmandu" }, { value: "6.0", display: "(GMT +6:00) Almaty, Dhaka, Colombo" }, { value: "7.0", display: "(GMT +7:00) Bangkok, Hanoi, Jakarta" }, { value: "8.0", display: "(GMT +8:00) Beijing, Perth, Singapore, Hong Kong" }, { value: "9.0", display: "(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk" }, { value: "9.5", display: "(GMT +9:30) Adelaide, Darwin" }, { value: "10.0", display: "(GMT +10:00) Eastern Australia, Guam, Vladivostok" }, { value: "11.0", display: "(GMT +11:00) Magadan, Solomon Islands, New Caledonia" }, { value: "12.0", display: "(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka" }];

  var TimeZoneBinder = exports.TimeZoneBinder = (_dec = (0, _aureliaTemplating.viewEngineHooks)(), _dec(_class = function () {
    function TimeZoneBinder() {
      _classCallCheck(this, TimeZoneBinder);
    }

    TimeZoneBinder.prototype.beforeBind = function beforeBind(view) {
      view.overrideContext.timezones = timezones;
    };

    return TimeZoneBinder;
  }()) || _class);
});
define('text!home/activity-list.html', ['module'], function(module) { module.exports = "<template bindable=\"activity\"><ul><li repeat.for=\"a of activity\" class=\"activity\"><a route-href=\"route.bind: a.type | activityTypeToRoute; params.bind: { id: a.associatedId }\"><div class=\"well\"><div class=\"avatar\"><img src=\"${a.createdBy.iconUrl}\"></div><div class=\"body\"><div class=\"title\" innerhtml.bind=\"a.title\"></div><div class=\"content\">${a.content}</div><div class=\"date\">${a.createdAt | date}</div></div></div></a></li></ul></template>"; });
define('text!home/home.html', ['module'], function(module) { module.exports = "<template><require from=\"./activity-list.html\"></require><require from=\"./news-list.html\"></require><div><div class=\"header\"><div class=\"header-left\">Activity</div><div class=\"header-right\">Benchmarks &amp; News</div></div><div class=\"sidebar\"><activity-list activity.bind=\"activity\"></activity-list></div><div class=\"detail-container\"><div class=\"row1x2\"><line-chart class=\"column1x2\" labels.bind=\"['January', 'February', 'March', 'April', 'May', 'June', 'July']\"><chart-data data.bind=\"[65, 59, 80, 81, 56, 55, 40]\"></chart-data><chart-data data.bind=\"[28, 48, 40, 19, 86, 27, 90]\" fill-color=\"rgba(230,38,135,0.2)\" stroke-color=\"rgba(230,38,135,0.5)\" point-color=\"rgba(230,38,135,1)\" , point-stroke-color=\"#fff\" , point-highlight-fill=\"#fff\" , point-highlight-stroke=\"rgba(230,38,135,1)\"></chart-data></line-chart><bar-chart class=\"column2x2\" labels.bind=\"['January', 'February', 'March', 'April', 'May', 'June', 'July']\"><chart-data data.bind=\"[65, 59, 80, 81, 56, 55, 40]\"></chart-data><chart-data data.bind=\"[28, 48, 40, 19, 86, 27, 90]\" fill-color=\"rgba(230,38,135,0.2)\" stroke-color=\"rgba(230,38,135,0.5)\" highlight-fill=\"rgba(230,38,135,0.75)\" highlight-stroke=\"rgba(230,38,135,1)\"></chart-data></bar-chart></div><div class=\"row2x2\"><news-list news.bind=\"news\"></news-list></div></div></div></template>"; });
define('text!home/news-list.html', ['module'], function(module) { module.exports = "<template bindable=\"news\" class=\"news\"><template repeat.for=\"item of news\"><h1>${item.title}</h1><p>${item.content}</p><div><span class=\"badge badge-success\">${item.createdAt | date}</span><div class=\"pull-right\"><span class=\"badge\" repeat.for=\"tag of item.tags\">${tag}</span></div></div><hr></template></template>"; });
define('text!login/login.html', ['module'], function(module) { module.exports = "<template><div class=\"login\"><div class=\"row\"><div class=\"col-md-4 col-md-offset-4 logo\"></div></div><div class=\"row\"><div class=\"col-md-4 col-md-offset-4 well\"><div show.bind=\"message\" class=\"alert alert-danger\">${message}</div><form submit.trigger=\"login()\" role=\"form\" class=\"form-horizontal\"><div class=\"form-group\"><label class=\"col-sm-2 control-label\">Username</label><div class=\"col-sm-10\"><input value.bind=\"username\" type=\"text\" class=\"form-control\" placeholder=\"username\"></div></div><div class=\"form-group\"><label class=\"col-sm-2 control-label\">Password</label><div class=\"col-sm-10\"><input value.bind=\"password\" type=\"password\" class=\"form-control\" placeholder=\"password\"></div></div><div class=\"form-group\"><div disable.bind=\"!username || !password\" class=\"col-sm-offset-2 col-sm-10 text-right\"><button type=\"submit\" class=\"btn btn-success\">Log In</button></div></div></form></div></div></div></template>"; });
define('text!settings/index.html', ['module'], function(module) { module.exports = "<template><div class=\"header\"><div class=\"header-left\">Settings</div><div class=\"header-right\"></div></div><div class=\"sidebar\"><ul class=\"nav nav-pills nav-stacked\"><template repeat.for=\"[category, routes] of router.navigation | categories\"><li class=\"nav-header\"><i class=\"fa\" class.bind=\"category.iconClass\"></i> <span>${category.title}</span></li><li repeat.for=\"nav of routes\" class=\"${nav.isActive ? 'active' : ''}\"><a href.bind=\"nav.href\">${nav.title}</a></li></template></ul></div><div class=\"detail-container settings-container\"><router-view></router-view></div></template>"; });
define('text!tickets/thread.html', ['module'], function(module) { module.exports = "<template><div class=\"ticket\"><div class=\"header\"><div class=\"btn-group\"><a class=\"btn btn-default creator\" route-href=\"route: user; params.bind: { id:ticket.participants[0].id}\" class=\"btn\"><span>${ticket.participants[0].username}</span> </a><button class=\"btn status active\"><span class=\"badge ${ticket.status}\">${ticket.status}</span></button></div></div><div class=\"sidebar\"><div class=\"well\"><form><div class=\"form-group\"><label class=\"control-label\">Type</label><select class=\"form-control\"><option>Question</option><option>Incident</option><option>Problem</option><option>Task</option></select></div><div class=\"form-group\"><label class=\"control-label\">Priority</label><select class=\"form-control\"><option>Low</option><option>Normal</option><option>High</option><option>Urgent</option></select></div><div class=\"form-group\"><label class=\"control-label\">Tags</label><input class=\"form-control\" type=\"text\" placeholder=\"tags\"></div></form></div><div class=\"well\"><form><div class=\"form-group\"><label class=\"control-label\">Internal Notes</label><textarea class=\"form-control\"></textarea></div></form></div></div><div class=\"detail-container\"><div class=\"header\"><i class=\"fa fa-comments\"></i><div class=\"content\"><div class=\"title\">${ticket.title}</div><div class=\"description\"><span>${ticket.createdAt | date}</span> <i class=\"fa fa-circle separator\"></i> <span>${from.firstName} ${from.lastName}</span> &lt; <span>${from.email}</span>&gt;</div></div></div><div class=\"thread\"><form class=\"message\"><rich-text-editor value.bind=\"message\"></rich-text-editor></form><div class=\"btn-group dropup pull-right\"><button click.trigger=\"submit('Solved')\" class=\"btn btn-success\">Submit as Solved</button> <button class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\"><span class=\"caret\"></span></button><ul class=\"dropdown-menu\"><li><a href=\"#\" click.trigger=\"submit('Open')\">Submit as Open</a> <a href=\"#\" click.trigger=\"submit('Pending')\">Submit as Pending</a> <a href=\"#\" click.trigger=\"submit('Solved')\">Submit as Solved</a></li></ul></div><div class=\"post-list\"><div repeat.for=\"post of ticket.posts\" class=\"post\"><input type=\"hidden\" model.one-time=\"getParticipant(post.fromId)\" ref=\"participant\"><div class=\"avatar\"><img src=\"${participant.model.avatarUrl}\"></div><div class=\"body\"><div><strong>${participant.model.firstName}</strong> <strong>${participant.model.lastName}</strong> <span class=\"createdAt\">${post.createdAt | date}</span></div><div><div><p innerhtml.bind=\"post.content\"></p></div></div></div></div></div></div></div></div></template>"; });
define('text!tickets/tickets.html', ['module'], function(module) { module.exports = "<template><div class=\"header\"><div class=\"header-single\">Tickets</div></div><data-grid items.bind=\"tickets\"><grid-column heading=\"Title\"><a route-href=\"route: thread; params.bind: { id:item.id }\">${item.title}</a></grid-column><grid-column heading=\"Submitted By\">${item.participants[0].firstName} ${item.participants[0].lastName}</grid-column><grid-column heading=\"Submitted On\">${item.createdAt | date}</grid-column><grid-column heading=\"Type\" property=\"type\"></grid-column><grid-column heading=\"Status\" property=\"status\"></grid-column><grid-column heading=\"Priority\" property=\"priority\"></grid-column></data-grid></template>"; });
define('text!shell/activity-list.html', ['module'], function(module) { module.exports = "<template bindable=\"activity\"><ul><li repeat.for=\"a of activity\" class=\"activity\"><a route-href=\"route.bind: a.type | activityTypeToRoute; params.bind: { id: a.associatedId }\"><div class=\"well\"><div class=\"avatar\"><img src=\"${a.createdBy.iconUrl}\"></div><div class=\"body\"><div class=\"title\" innerhtml.bind=\"a.title\"></div><div class=\"content\">${a.content}</div><div class=\"date\">${a.createdAt}</div></div></div></a></li></ul></template>"; });
define('text!shell/header.html', ['module'], function(module) { module.exports = "<template><nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\"><ul class=\"nav navbar-nav tabs\"><li repeat.for=\"tab of tabs\" class=\"${tab.isActive ? 'active' : ''}\"><a route-href=\"route.bind: tab.route; params.bind: tab.params\">${tab.title}</a> <a href=\"#\" click.trigger=\"closeTab(tab)\"><i class=\"fa fa-times\"></i></a></li><li class=\"dropdown add\"><a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-plus\"></i>add</a><ul class=\"dropdown-menu\"><li><a route-href=\"route: thread; params.bind: { id:'new' }\"><i class=\"icon-ticket\"></i> New Ticket</a></li><li><a route-href=\"route: user; params.bind: { id:'new' }\"><i class=\"icon-group\"></i> New User</a></li></ul></li></ul><ul class=\"nav navbar-nav navbar-right\"><li class=\"dropdown\"><a href=\"#\" class=\"avatar dropdown-toggle\" data-toggle=\"dropdown\"><img src=\"${user.iconUrl}\" title.bind=\"user.username\"> <b class=\"caret\"></b></a><ul class=\"dropdown-menu\" role=\"menu\"><li role=\"presentation\"><a route-href=\"route: settings\"><i class=\"fa fa-cog\"></i> Settings</a></li><li role=\"presentation\"><a route-href=\"route: help\"><i class=\"fa fa-envelope\"></i> Help</a></li><li role=\"presentation\" class=\"divider\"></li><li role=\"presentation\"><a href=\"#\" click.trigger=\"logout()\"><i class=\"fa fa-power-off\"></i> Logout</a></li></ul></li></ul></nav></template>"; });
define('text!shell/shell.html', ['module'], function(module) { module.exports = "<template><compose view=\"./header.html\"></compose><compose view=\"./sidebar.html\"></compose><div class=\"page-host\"><router-view></router-view></div></template>"; });
define('text!shell/sidebar.html', ['module'], function(module) { module.exports = "<template><div class=\"main-nav\"><ul class=\"nav nav-list\"><li repeat.for=\"nav of router.navigation\" class=\"${nav.isActive ? 'active' : ''}\"><a href.bind=\"nav.href\"><i class=\"fa ${nav.settings.iconClass}\"></i></a></li></ul></div></template>"; });
define('text!resources/dialogs/message-box.html', ['module'], function(module) { module.exports = "<template><ai-dialog style=\"max-width:325px\"><ai-dialog-header>${model.title}</ai-dialog-header><ai-dialog-body>${model.message}</ai-dialog-body><ai-dialog-footer><button repeat.for=\"option of model.options\" click.trigger=\"selectOption(option)\">${option}</button></ai-dialog-footer></ai-dialog></template>"; });
define('text!resources/dialogs/prompt.html', ['module'], function(module) { module.exports = "<template><ai-dialog><ai-dialog-header>${model.title}</ai-dialog-header><ai-dialog-body><p>${model.message}</p><form submit.trigger=\"ok()\"><input value.bind=\"answer\" type=\"text\" class=\"form-control\" attach-focus=\"true\"></form></ai-dialog-body><ai-dialog-footer><button click.trigger=\"cancel()\">Cancel</button> <button click.trigger=\"ok()\" disabled.bind=\"!answer\">Ok</button>!</ai-dialog-footer></ai-dialog></template>"; });
define('text!resources/elements/data-grid.html', ['module'], function(module) { module.exports = "<template><slot></slot></template>"; });
define('text!settings/account/index.html', ['module'], function(module) { module.exports = "<template><div class=\"header\"><div class=\"content\"><div class=\"title\">${heading}</div></div></div><div class=\"grid-container container-fluid\"><div class=\"row-fluid\"><div class=\"alert alert-danger text-center\"><span>${heading} Settings Not Implemented</span></div></div></div></template>"; });
define('text!settings/email/index.html', ['module'], function(module) { module.exports = "<template><div class=\"header\"><div class=\"content\"><div class=\"title\">${heading}</div></div></div><div class=\"grid-container container-fluid\"><div class=\"row-fluid\"><div class=\"alert alert-danger text-center\"><span>${heading} Settings Not Implemented</span></div></div></div></template>"; });
define('text!settings/api/index.html', ['module'], function(module) { module.exports = "<template><div class=\"header\"><div class=\"content\"><div class=\"title\">${heading}</div></div></div><div class=\"grid-container container-fluid\"><div class=\"row-fluid\"><div class=\"alert alert-danger text-center\"><span>${heading} Settings Not Implemented</span></div></div></div></template>"; });
define('text!settings/facebook/index.html', ['module'], function(module) { module.exports = "<template><div class=\"header\"><div class=\"content\"><div class=\"title\">${heading}</div></div></div><div class=\"grid-container container-fluid\"><div class=\"row-fluid\"><div class=\"alert alert-danger text-center\"><span>${heading} Settings Not Implemented</span></div></div></div></template>"; });
define('text!settings/feedbacktab/index.html', ['module'], function(module) { module.exports = "<template><div class=\"header\"><div class=\"content\"><div class=\"title\">${heading}</div></div></div><div class=\"grid-container container-fluid\"><div class=\"row-fluid\"><div class=\"alert alert-danger text-center\"><span>${heading} Settings Not Implemented</span></div></div></div></template>"; });
define('text!settings/overview/index.html', ['module'], function(module) { module.exports = "<template><div class=\"header\"><div class=\"content\"><div class=\"title\">${heading}</div></div></div><div class=\"grid-container container-fluid\"><div class=\"row-fluid\"><div class=\"alert alert-danger text-center\"><span>${heading} Settings Not Implemented</span></div></div></div></template>"; });
define('text!settings/security/index.html', ['module'], function(module) { module.exports = "<template><div class=\"header\"><div class=\"content\"><div class=\"title\">${heading}</div></div></div><div class=\"grid-container container-fluid\"><div class=\"row-fluid\"><div class=\"alert alert-danger text-center\"><span>${heading} Settings Not Implemented</span></div></div></div></template>"; });
define('text!settings/subscription/index.html', ['module'], function(module) { module.exports = "<template><div class=\"header\"><div class=\"content\"><div class=\"title\">${heading}</div></div></div><div class=\"grid-container container-fluid\"><div class=\"row-fluid\"><div class=\"alert alert-danger text-center\"><span>${heading} Settings Not Implemented</span></div></div></div></template>"; });
define('text!settings/twitter/index.html', ['module'], function(module) { module.exports = "<template><div class=\"header\"><div class=\"content\"><div class=\"title\">${heading}</div></div></div><div class=\"grid-container container-fluid\"><div class=\"row-fluid\"><div class=\"alert alert-danger text-center\"><span>${heading} Settings Not Implemented</span></div></div></div></template>"; });
define('text!settings/webportal/index.html', ['module'], function(module) { module.exports = "<template><div class=\"header\"><div class=\"content\"><div class=\"title\">${heading}</div></div></div><div class=\"grid-container container-fluid\"><div class=\"row-fluid\"><div class=\"alert alert-danger text-center\"><span>${heading} Settings Not Implemented</span></div></div></div></template>"; });
define('text!users/user-detail.html', ['module'], function(module) { module.exports = "<template class=\"user-detail\" bindable=\"controller\"><div with.bind=\"controller.editable\" class=\"header\"><div><div class=\"avatar\"><img src=\"${avatarUrl}\"></div><div class=\"content\"><div><span class=\"title\">${fullName}</span></div><div>${email}</div></div><div class=\"text-right user-errors\" if.bind=\"!controller.isValid\"><span class=\"label label-danger sandbox-invalid\">User Has Errors</span></div></div></div><div with.bind=\"controller.editable\" class=\"body\"><ul class=\"nav nav-tabs\"><li class=\"active\"><a href=\"#home\" data-toggle=\"tab\">Profile</a></li><li><a href=\"#address\" data-toggle=\"tab\">Address</a></li><li><a href=\"#profile\" data-toggle=\"tab\">Account</a></li><li class=\"pull-right\"><button class=\"btn ${isActive ? 'btn-danger' : 'btn-info'}\" click.trigger=\"controller.toggleActiveStatus()\">${isActive ? 'Deactivate' : 'Activate'}</button> <button class=\"btn btn-warning\" click.trigger=\"controller.revert()\" disabled.bind=\"!controller.isDirty\">Revert</button> <button class=\"btn btn-success\" click.trigger=\"controller.save()\" disabled.bind=\"!controller.isDirty || !controller.isValid\">Save</button></li></ul><div with.bind=\"controller.editable\" class=\"tab-content\"><div class=\"tab-pane active in\" id=\"home\"><form role=\"form\" class=\"form-horizontal\"><div class=\"form-group\"><label class=\"col-sm-2 control-label\">First Name</label><div class=\"col-sm-3\"><input value.bind=\"firstName & validate\" type=\"text\" placeholder=\"first name\" class=\"form-control\"></div></div><div class=\"form-group\"><label class=\"col-sm-2 control-label\">Last Name</label><div class=\"col-sm-3\"><input value.bind=\"lastName & validate\" type=\"text\" placeholder=\"last name\" class=\"form-control\"></div></div><div class=\"form-group\"><label class=\"col-sm-2 control-label\">Email</label><div class=\"col-sm-3\"><input value.bind=\"email & validate\" type=\"text\" placeholder=\"email\" class=\"form-control\"></div></div><div class=\"form-group\"><label class=\"col-sm-2 control-label\">Time Zone</label><div class=\"col-sm-3\"><select class=\"form-control\"><option repeat.for=\"zone of timezones\" value.bind=\"zone.value\">${zone.display}</option></select></div></div><div class=\"form-group\"><label class=\"col-sm-2 control-label\">About</label><div class=\"col-sm-3\"><textarea rows=\"3\" class=\"form-control\" placeholder=\"about\"></textarea></div></div></form></div><div class=\"tab-pane fade\" id=\"address\"><form role=\"form\" class=\"form-horizontal\"><div class=\"form-group\"><label class=\"col-sm-2 control-label\">Address Line 1</label><div class=\"col-sm-3\"><input type=\"text\" placeholder=\"address line 1\" class=\"form-control\"><p class=\"help-block\">Street address, P.O. box, company name, c/o</p></div></div><div class=\"form-group\"><label class=\"col-sm-2 control-label\">Address Line 2</label><div class=\"col-sm-3\"><input type=\"text\" placeholder=\"address line 2\" class=\"form-control\"><p class=\"help-block\">Apartment, suite , unit, building, floor, etc.</p></div></div><div class=\"form-group\"><label class=\"col-sm-2 control-label\">City / Town</label><div class=\"col-sm-3\"><input type=\"text\" placeholder=\"city\" class=\"form-control\"><p class=\"help-block\"></p></div></div><div class=\"form-group\"><label class=\"col-sm-2 control-label\">State / Province / Region</label><div class=\"col-sm-3\"><input type=\"text\" placeholder=\"state / province / region\" class=\"form-control\"><p class=\"help-block\"></p></div></div><div class=\"form-group\"><label class=\"col-sm-2 control-label\">Zip / Postal Code</label><div class=\"col-sm-3\"><input type=\"text\" placeholder=\"zip or postal code\" class=\"form-control\"><p class=\"help-block\"></p></div></div><div class=\"form-group\"><label class=\"col-sm-2 control-label\">Country</label><div class=\"col-sm-3\"><select class=\"form-control\"><option value=\"\" selected=\"selected\">(please select a country)</option><option repeat.for=\"country of countries\" value.bind=\"country.abbreviation\">${country.name}</option></select></div></div></form></div><div class=\"tab-pane fade\" id=\"profile\"><form role=\"form\" class=\"form-horizontal\"><div class=\"form-group\"><label class=\"col-sm-2 control-label\">Username</label><div class=\"col-sm-3\"><p class=\"form-control-static\">${controller.editable.username}</p></div></div><div class=\"form-group\"><label class=\"col-sm-2 control-label\">Password</label><div class=\"col-sm-3\"><input type=\"password\" class=\"form-control\"></div></div><div class=\"form-group\"><label class=\"col-sm-2 control-label\">Confirm Password</label><div class=\"col-sm-3\"><input type=\"password\" class=\"form-control\"></div></div></form></div></div></div></template>"; });
define('text!users/users.html', ['module'], function(module) { module.exports = "<template><require from=\"./user-detail.html\"></require><div><div class=\"header\"><div class=\"header-left\">Users</div></div><div class=\"sidebar\"><ul repeat.for=\"user of users\"><li class=\"customer ${activeId === user.id ? 'active' : ''}\"><a route-href=\"route: user; params.bind: { id: user.id }\"><div class=\"well\"><div><div class=\"avatar\"><img src=\"${user.avatarUrl}\"></div><div class=\"body\"><p><strong>${user.fullName}</strong></p><span class=\"badge badge-error\">${user.ticketCount & oneTime} tickets</span> <span class=\"badge badge-success\">${user.postCount & oneTime} posts</span></div></div></div></a></li></ul></div><div class=\"detail-container\" if.bind=\"controller.editable\"><user-detail controller.bind=\"controller\"></user-detail></div><div class=\"detail-container\" if.bind=\"!controller.editable\"><h2 class=\"select-from-list\">Please select a user from the list.</h2></div></div></template>"; });
//# sourceMappingURL=app-bundle.js.map