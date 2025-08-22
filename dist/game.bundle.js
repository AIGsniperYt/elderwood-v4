var GameBundle = (function (exports) {
  'use strict';

  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
  }
  function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) return _arrayLikeToArray(r);
  }
  function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
  }
  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
      writable: !1
    }), e;
  }
  function _createForOfIteratorHelper(r, e) {
    var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (!t) {
      if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
        t && (r = t);
        var n = 0,
          F = function () {};
        return {
          s: F,
          n: function () {
            return n >= r.length ? {
              done: !0
            } : {
              done: !1,
              value: r[n++]
            };
          },
          e: function (r) {
            throw r;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o,
      a = !0,
      u = !1;
    return {
      s: function () {
        t = t.call(r);
      },
      n: function () {
        var r = t.next();
        return a = r.done, r;
      },
      e: function (r) {
        u = !0, o = r;
      },
      f: function () {
        try {
          a || null == t.return || t.return();
        } finally {
          if (u) throw o;
        }
      }
    };
  }
  function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[r] = t, e;
  }
  function _iterableToArray(r) {
    if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
  }
  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _slicedToArray(r, e) {
    return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
  }
  function _toConsumableArray(r) {
    return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }

  // config.js
  var Config = {
    // config.js
    DEBUG: {
      SHOW_CHUNK_BORDERS: true,
      SHOW_ENEMY_HITBOXES: false,
      SHOW_PLAYER_HITBOX: false,
      SHOW_FPS: true // Add this new option
    },
    TILE: {
      WIDTH: 64,
      HEIGHT: 32,
      DEPTH: 16
    },
    COLORS: {
      BACKGROUND: 0x222222,
      HIGHLIGHT: 0x00ff00
    },
    PLAYER: {
      WIDTH: 48,
      HEIGHT: 64,
      SPEED: 0.15,
      CHUNK_LOAD_DISTANCE: 2,
      HITBOX_WIDTH: 32,
      HITBOX_HEIGHT: 48,
      ATTACK_COOLDOWN: 100,
      // ms
      ATTACK_RANGE: 3,
      // tiles
      ATTACK_DAMAGE: 3
    },
    CAMERA: {
      ZOOM: 1.5,
      OFFSET_Y: 0
    },
    ENEMY: {
      WIDTH: 32,
      HEIGHT: 32,
      HITBOX_RADIUS: 0.5,
      SPAWN_RATE: 1,
      SEPARATION_FORCE: 0.2,
      // Add this
      SEPARATION_RADIUS: 1.5,
      // And this
      JITTER_REDUCTION_ZONE: 0.2,
      // Radius around player where damping applies
      JITTER_DAMPING: 0.1,
      // How strongly to damp movement near player
      MIN_MOVE_DISTANCE: 0.01 // Minimum movement to process
    },
    TALL_GRASS: {
      WIDTH: 48,
      HEIGHT: 48,
      SWAY_AMPLITUDE: 0.15,
      // in radians
      SWAY_SPEED: 0.0032,
      DENSITY: 0.3,
      // 0-1, chance for a tile to have grass
      VARIATION: 0.1,
      // random sway variation
      Y_OFFSET: -10 // pixels above tile center
    },
    ASSETS: {
      PLAYER: "assets/player.png",
      GRASS_ATLAS: "assets/grass-atlas.png",
      // Contains all grass variants
      SLIME: "assets/slime.png",
      TALL_GRASS: ["assets/tall_grass1.png", "assets/tall_grass2.png", "assets/tall_grass3.png"]
    },
    ATLAS_INFO: {
      GRASS: {
        TILE_WIDTH: 64,
        // Must match individual tile width
        TILE_HEIGHT: 32,
        // Must match individual tile height
        COUNT: 3 // Number of variants in the atlas
      }
    },
    // Add to Config in config.js
    ATTACK_TYPES: {
      SLASH: {
        PRECISE: false,
        DAMAGE: 3,
        KNOCKBACK: 0.3,
        COOLDOWN: 200,
        RANGE: 2.5,
        SWING_TIME: 120
      },
      QUICK: {
        PRECISE: false,
        DAMAGE: 1,
        KNOCKBACK: 0.6,
        RANGE: 2,
        COOLDOWN: 50,
        SWING_TIME: 80
      },
      HEAVY: {
        PRECISE: false,
        DAMAGE: 5,
        KNOCKBACK: 0.8,
        COOLDOWN: 300,
        RANGE: 3,
        SWING_TIME: 160
      },
      POKE: {
        PRECISE: true,
        DAMAGE: 8,
        // High damage
        KNOCKBACK: 0.2,
        // Less knockback since it's a precise attack
        COOLDOWN: 500,
        SWING_TIME: 400,
        RANGE: 4.5,
        // Longer range
        WIDTH: 0.5 // Narrow attack width
      },
      SHOOT: {
        PRECISE: true,
        DAMAGE: 2,
        COOLDOWN: 250,
        KNOCKBACK: 0.2,
        // Less knockback since it's a precise attack
        PROJECTILE_SPEED: 0.3,
        RANGE: 10
      }
    },
    WORLD: {
      CHUNK_SIZE: 16,
      // Must match World class value
      MAX_POOL_SIZE: 500 // Maximum sprites to keep in pool
    }
  };

  /* File structure for grass_atlas.png:
     [grass1][grass2][grass3] in a single row
     Total width: 192px (3 tiles × 64px)
     Height: 32px
  */

  /*
  tasks:
  add trees
  add particles

  */

  var Particle = /*#__PURE__*/function () {
    function Particle(game, x, z) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      _classCallCheck(this, Particle);
      this.game = game;
      this.x = x;
      this.z = z;
      this.lifetime = options.lifetime || 1000; // ms
      this.size = options.size || 4;
      this.color = options.color || 0xffffff;
      this.alpha = options.alpha || 1;
      this.velocity = options.velocity || {
        x: 0,
        z: 0
      };
      this.gravity = options.gravity || 0;
      this.friction = options.friction || 0.98;
      this.rotation = options.rotation || 0;
      this.rotationSpeed = options.rotationSpeed || 0;
      this.scaleOverTime = options.scaleOverTime || false;
      this.createdAt = Date.now();
      this.destroyed = false;

      // create or reuse a cached circle texture (keyed by size/color/alpha)
      var key = "".concat(this.size, "_").concat(this.color, "_").concat(this.alpha);
      var tex = Particle.textureCache.get(key);
      if (!tex) {
        var g = new PIXI.Graphics();
        g.beginFill(this.color, this.alpha);
        g.drawCircle(0, 0, this.size);
        g.endFill();

        // generateTexture exists on the PIXI.Application.renderer (app.renderer)
        tex = this.game.app.renderer.generateTexture(g);
        Particle.textureCache.set(key, tex);

        // destroy the temporary Graphics to avoid it being accidentally added somewhere
        g.destroy({
          children: true,
          texture: false
        });
      }
      this.texture = tex;
      this.sprite = new PIXI.Sprite(this.texture);
      this.sprite.anchor.set(0.5, 0.5);

      // Position particle
      this.updateSpritePosition();

      // Add to particle container (use your renderer's particleContainer)
      // ensure renderer.particleContainer exists (your IsometricRenderer creates it)
      this.game.renderer.particleContainer.addChild(this.sprite);
    }
    return _createClass(Particle, [{
      key: "update",
      value: function update(delta) {
        if (this.destroyed) return false;
        var now = Date.now();
        var elapsed = now - this.createdAt;
        if (elapsed >= this.lifetime) {
          this.destroy();
          return false;
        }

        // physics
        this.x += this.velocity.x * delta;
        this.z += this.velocity.z * delta;
        this.velocity.z += this.gravity * delta;
        this.velocity.x *= this.friction;
        this.velocity.z *= this.friction;
        this.rotation += this.rotationSpeed * delta;
        if (this.scaleOverTime) {
          var progress = elapsed / this.lifetime;
          var scale = Math.max(0, 1 - progress);
          this.sprite.scale.set(scale);
        }
        var alphaProgress = elapsed / this.lifetime;
        this.sprite.alpha = this.alpha * (1 - alphaProgress);
        this.updateSpritePosition();
        this.sprite.rotation = this.rotation;
        return true;
      }
    }, {
      key: "updateSpritePosition",
      value: function updateSpritePosition() {
        var screenX = (this.x - this.z) * Config.TILE.WIDTH / 2;
        var screenY = (this.x + this.z) * Config.TILE.HEIGHT / 2;
        this.sprite.position.set(screenX, screenY);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        if (this.destroyed) return;
        this.destroyed = true;
        if (this.sprite && this.sprite.parent) this.sprite.parent.removeChild(this.sprite);
        this.sprite = null;
        // NOTE: texture remains cached for reuse. If you want to free cached textures,
        // add a cleanup routine that calls Particle.textureCache.get(key).destroy() and deletes the key.
      }
    }]);
  }();
  // simple cache so we don't regenerate identical textures over and over
  _defineProperty(Particle, "textureCache", new Map());
  var ParticleSystem = /*#__PURE__*/function () {
    function ParticleSystem() {
      _classCallCheck(this, ParticleSystem);
    }
    return _createClass(ParticleSystem, null, [{
      key: "createDamageParticles",
      value: function createDamageParticles(game, x, z, attackType, direction) {
        var _Config$ATTACK_TYPES$;
        var isPrecise = ((_Config$ATTACK_TYPES$ = Config.ATTACK_TYPES[attackType]) === null || _Config$ATTACK_TYPES$ === void 0 ? void 0 : _Config$ATTACK_TYPES$.PRECISE) || false;
        var particleCount = isPrecise ? 8 : 5;
        var particles = [];
        if (isPrecise) {
          var spreadAngle = Math.PI / 6;
          for (var i = 0; i < particleCount; i++) {
            var angle = (i / (particleCount - 1) - 0.5) * spreadAngle;
            var cos = Math.cos(angle);
            var sin = Math.sin(angle);
            var dirX = direction.x * cos - direction.z * sin;
            var dirZ = direction.x * sin + direction.z * cos;
            var centerFactor = 1 - Math.abs(i / (particleCount - 1) - 0.5) * 2;
            var speed = 0.1 + centerFactor * 0.15;
            particles.push(new Particle(game, x, z, {
              velocity: {
                x: dirX * speed,
                z: dirZ * speed
              },
              lifetime: 600 + Math.random() * 400,
              size: 3 + Math.random() * 2,
              gravity: 0.001,
              rotationSpeed: (Math.random() - 0.5) * 0.1
            }));
          }
        } else {
          var perpendicular = {
            x: -direction.z,
            z: direction.x
          };
          for (var _i = 0; _i < particleCount; _i++) {
            var side = Math.random() > 0.5 ? 1 : -1;
            var _dirX = perpendicular.x * side;
            var _dirZ = perpendicular.z * side;
            var randomAngle = Math.random() * Math.PI / 4 - Math.PI / 8;
            var _cos = Math.cos(randomAngle);
            var _sin = Math.sin(randomAngle);
            var finalDirX = _dirX * _cos - _dirZ * _sin;
            var finalDirZ = _dirX * _sin + _dirZ * _cos;
            particles.push(new Particle(game, x, z, {
              velocity: {
                x: finalDirX * (0.08 + Math.random() * 0.04),
                z: finalDirZ * (0.08 + Math.random() * 0.04)
              },
              lifetime: 500 + Math.random() * 300,
              size: 2 + Math.random() * 3,
              gravity: 0.0005,
              rotationSpeed: (Math.random() - 0.5) * 0.08
            }));
          }
        }
        return particles;
      }
    }, {
      key: "createDeathParticles",
      value: function createDeathParticles(game, x, z) {
        var particles = [];
        var particleCount = 12;
        for (var i = 0; i < particleCount; i++) {
          var angle = Math.random() * Math.PI * 2;
          var speed = 0.05 + Math.random() * 0.07;
          particles.push(new Particle(game, x, z, {
            velocity: {
              x: Math.cos(angle) * speed,
              z: Math.sin(angle) * speed
            },
            lifetime: 800 + Math.random() * 400,
            size: 3 + Math.random() * 4,
            gravity: 0.0008,
            rotationSpeed: (Math.random() - 0.5) * 0.12,
            scaleOverTime: true
          }));
        }
        return particles;
      }
    }]);
  }();

  var Slime = /*#__PURE__*/function () {
    // enemy.js
    function Slime(game, x, z) {
      _classCallCheck(this, Slime);
      this.game = game;
      this.x = x;
      this.z = z;
      this.health = 30;
      this.radius = Config.ENEMY.HITBOX_RADIUS;
      this.speed = 0.05;

      // Knockback properties
      this.knockbackX = 0;
      this.knockbackZ = 0;
      this.knockbackResistance = 0.5;
      this.isKnockedback = false;

      // Create sprite with your custom art
      this.sprite = PIXI.Sprite.from(Config.ASSETS.SLIME);
      this.sprite.anchor.set(0.5, 0.5);
      this.sprite.width = Config.ENEMY.WIDTH;
      this.sprite.height = Config.ENEMY.HEIGHT;

      // Add damage flash filter
      this.damageFilter = new PIXI.ColorMatrixFilter();
      this.sprite.filters = [this.damageFilter];

      // Debug hitbox (optional)
      this.hitboxVisual = new PIXI.Graphics();
      this.hitboxVisual.lineStyle(1, 0xff0000);
      this.hitboxVisual.drawCircle(0, 0, this.radius * Config.TILE.WIDTH);
      this.sprite.addChild(this.hitboxVisual);
      this.hitboxVisual.visible = Config.DEBUG.SHOW_ENEMY_HITBOXES;
    }

    // Flash white when hit
    return _createClass(Slime, [{
      key: "flashWhite",
      value: function flashWhite() {
        var _this = this;
        // Set all visible pixels to white
        this.damageFilter.matrix = [0, 0, 0, 0, 0.86,
        // R -> white
        0, 0, 0, 0, 0.86,
        // G -> white
        0, 0, 0, 0, 0.86,
        // B -> white
        0, 0, 0, 1, 0 // Alpha unchanged
        ];

        // Revert after 100ms
        setTimeout(function () {
          _this.damageFilter.matrix = new PIXI.ColorMatrixFilter().matrix;
        }, 100);
      }
    }, {
      key: "update",
      value: function update(delta) {
        // Handle knockback first (unchanged)
        if (this.isKnockedback) {
          this.x += this.knockbackX * delta;
          this.z += this.knockbackZ * delta;
          this.knockbackX *= this.knockbackResistance;
          this.knockbackZ *= this.knockbackResistance;
          if (Math.abs(this.knockbackX) < 0.01 && Math.abs(this.knockbackZ) < 0.01) {
            this.knockbackX = 0;
            this.knockbackZ = 0;
            this.isKnockedback = false;
          }
          this.game.world.moveEnemy(this, this.x, this.z);
          return;
        }

        // Calculate desired direction toward player
        var toPlayerX = this.game.player.x - this.x;
        var toPlayerZ = this.game.player.z - this.z;
        var playerDist = Math.hypot(toPlayerX, toPlayerZ) || 1;

        // Base movement vector (seek player)
        var desiredX = toPlayerX / playerDist;
        var desiredZ = toPlayerZ / playerDist;

        // Separation from nearby enemies
        var nearby = this.game.world.getNearbyEnemies(this.x, this.z, 1);
        var separationX = 0;
        var separationZ = 0;
        var _iterator = _createForOfIteratorHelper(nearby),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var other = _step.value;
            if (other === this) continue;
            var _dx = this.x - other.x;
            var _dz = this.z - other.z;
            var dist = Math.hypot(_dx, _dz) || 0.0001;
            var _minDist = Config.ENEMY.SEPARATION_RADIUS;
            if (dist < _minDist) {
              var push = (1 - dist / _minDist) * Config.ENEMY.SEPARATION_FORCE;
              separationX += _dx / dist * push;
              separationZ += _dz / dist * push;
            }
          }

          // Combine behaviors
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        desiredX = desiredX + separationX;
        desiredZ = desiredZ + separationZ;

        // Normalize
        var desiredLength = Math.hypot(desiredX, desiredZ) || 1;
        desiredX /= desiredLength;
        desiredZ /= desiredLength;

        // Try primary movement direction first
        var moveX = desiredX * this.speed * delta;
        var moveZ = desiredZ * this.speed * delta;
        var newX = this.x + moveX;
        var newZ = this.z + moveZ;

        // If primary direction is blocked, try alternative directions
        if (this.checkCollision(newX, newZ)) {
          // Generate 8 possible directions (including diagonals)
          var directions = [{
            x: 1,
            z: 0
          },
          // right
          {
            x: -1,
            z: 0
          },
          // left
          {
            x: 0,
            z: 1
          },
          // down
          {
            x: 0,
            z: -1
          },
          // up
          {
            x: 0.707,
            z: 0.707
          },
          // down-right
          {
            x: -0.707,
            z: 0.707
          },
          // down-left
          {
            x: 0.707,
            z: -0.707
          },
          // up-right
          {
            x: -0.707,
            z: -0.707
          } // up-left
          ];

          // Sort directions by how close they are to desired direction
          directions.sort(function (a, b) {
            var dotA = a.x * desiredX + a.z * desiredZ;
            var dotB = b.x * desiredX + b.z * desiredZ;
            return dotB - dotA; // descending order
          });

          // Try each direction until we find one that works
          for (var _i = 0, _directions = directions; _i < _directions.length; _i++) {
            var dir = _directions[_i];
            var testX = this.x + dir.x * this.speed * delta * 0.5; // reduced speed for alternative moves
            var testZ = this.z + dir.z * this.speed * delta * 0.5;
            if (!this.checkCollision(testX, testZ)) {
              newX = testX;
              newZ = testZ;
              break;
            }
          }
        }

        // Apply small separation force if still colliding
        if (this.checkCollision(newX, newZ)) {
          var pushX = 0;
          var pushZ = 0;
          var _iterator2 = _createForOfIteratorHelper(nearby),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var enemy = _step2.value;
              if (enemy === this) continue;
              var dx = this.x - enemy.x;
              var dz = this.z - enemy.z;
              var distSq = dx * dx + dz * dz;
              var minDist = this.radius + (typeof enemy.radius === "number" ? enemy.radius : Config.ENEMY.HITBOX_RADIUS);
              if (distSq < minDist * minDist) {
                var d = Math.sqrt(distSq) || 0.0001;
                var overlap = minDist - d;
                pushX += dx / d * overlap * Config.ENEMY.SEPARATION_FORCE;
                pushZ += dz / d * overlap * Config.ENEMY.SEPARATION_FORCE;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          newX += pushX;
          newZ += pushZ;
        }

        // Don't let enemies push into player
        var playerDx = newX - this.game.player.x;
        var playerDz = newZ - this.game.player.z;
        var playerMin = this.radius + Config.PLAYER.HITBOX_WIDTH / Config.TILE.WIDTH / 2;
        if (playerDx * playerDx + playerDz * playerDz < playerMin * playerMin) {
          return;
        }

        // Commit movement
        this.x = newX;
        this.z = newZ;
        this.game.world.moveEnemy(this, this.x, this.z);
      }
    }, {
      key: "checkCollision",
      value: function checkCollision(newX, newZ) {
        // player collision
        var playerDx = newX - this.game.player.x;
        var playerDz = newZ - this.game.player.z;
        var playerDistSq = playerDx * playerDx + playerDz * playerDz;
        var minDistPlayer = this.radius + Config.PLAYER.HITBOX_WIDTH / Config.TILE.WIDTH / 2;
        if (playerDistSq < minDistPlayer * minDistPlayer) return true;

        // other enemies: proper radius-sum check
        var _iterator3 = _createForOfIteratorHelper(this.game.world.enemies),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var enemy = _step3.value;
            if (enemy === this) continue;
            var dx = newX - enemy.x;
            var dz = newZ - enemy.z;
            var distSq = dx * dx + dz * dz;
            var otherR = typeof enemy.radius === "number" ? enemy.radius : Config.ENEMY.HITBOX_RADIUS;
            var minDist = this.radius + otherR;
            if (distSq < minDist * minDist) return true;
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        return false;
      }

      // enemy.js
      // In enemy.js, update the takeDamage method signature
    }, {
      key: "takeDamage",
      value: function takeDamage(amount, knockbackForce, knockbackDirection) {
        var _this$game$particles;
        var attackType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "SLASH";
        this.health -= amount;
        this.flashWhite(); // Trigger flash effect

        // Create damage particles
        var damageParticles = ParticleSystem.createDamageParticles(this.game, this.x, this.z, attackType, knockbackDirection);
        (_this$game$particles = this.game.particles).push.apply(_this$game$particles, _toConsumableArray(damageParticles));
        console.log("dmg:", amount, "health:", this.health);
        if (knockbackForce > 0 && knockbackDirection) {
          this.knockbackX = knockbackDirection.x * knockbackForce;
          this.knockbackZ = knockbackDirection.z * knockbackForce;
          this.isKnockedback = true;
        }
        return this.health <= 0; // don't call world.destroyEnemy here
      }
    }, {
      key: "destroy",
      value: function destroy() {
        if (this.sprite.parent) {
          var _this$game$particles2;
          var deathParticles = ParticleSystem.createDeathParticles(this.game, this.x, this.z);
          (_this$game$particles2 = this.game.particles).push.apply(_this$game$particles2, _toConsumableArray(deathParticles));
          this.sprite.parent.removeChild(this.sprite);
        }
      }
    }]);
  }();

  var TallGrass = /*#__PURE__*/function () {
    function TallGrass(x, z) {
      _classCallCheck(this, TallGrass);
      this.x = x;
      this.z = z;

      // Only two time offsets now (for two blades)
      this.timeOffsets = [Math.random() * 1000, Math.random() * 1000];
      this.swayOffsets = [Math.random() * Config.TALL_GRASS.VARIATION, Math.random() * Config.TALL_GRASS.VARIATION];

      // Only two rotations now
      this.currentRotations = [0, 0];

      // Only two rotation offsets now
      this.bladeRotationOffsets = [0, 0];
      this._repelTimer = 0;
      this._repelDuration = 400;
      this._triggerDist = 0.9;
      this._maxAngle = 1;
    }
    return _createClass(TallGrass, [{
      key: "update",
      value: function update(delta, time) {
        var _this = this;
        // sway for two blades
        this.currentRotations = this.timeOffsets.map(function (offset, i) {
          return Math.sin((time + offset) * Config.TALL_GRASS.SWAY_SPEED + _this.swayOffsets[i]) * Config.TALL_GRASS.SWAY_AMPLITUDE;
        });
        if (this._repelTimer > 0) {
          this._repelTimer -= delta * (1000 / 60) || 16.67;
          var t = Math.max(0, Math.min(1, this._repelTimer / this._repelDuration));
          for (var i = 0; i < 2; i++) this.bladeRotationOffsets[i] *= t;
          if (this._repelTimer <= 0) this.bladeRotationOffsets = [0, 0];
        }
      }
    }, {
      key: "applyRepel",
      value: function applyRepel(playerX, playerZ) {
        var dx = this.x - playerX;
        var dz = this.z - playerZ;
        var dist = Math.hypot(dx, dz);
        if (dist <= this._triggerDist && dist > 0) {
          var factor = 1 - dist / this._triggerDist;

          // Only two blades now - left and right
          this.bladeRotationOffsets[0] = -this._maxAngle * factor; // left
          this.bladeRotationOffsets[1] = this._maxAngle * factor; // right
          this._repelTimer = this._repelDuration;
        }
      }
    }]);
  }();

  var World = /*#__PURE__*/function () {
    function World(game) {
      _classCallCheck(this, World);
      this.game = game;

      // Terrain chunks (tiles)
      this.chunks = new Map(); // Map<"cx,cz", { blocks, needsUpdate }>

      // Enemy spatial index (single source of truth)
      this.chunkEnemies = new Map(); // Map<"cx,cz", Set<Enemy>>

      // Use config if provided
      this.chunkSize = Config.WORLD && Config.WORLD.CHUNK_SIZE ? Config.WORLD.CHUNK_SIZE : 16;
      console.log('[World] Initialized with chunk size', this.chunkSize);
      this.tallGrass = new Set(); // Stores all tall grass instances
    }

    // ---------------------------
    // Public read-only aggregate:
    // Keeps compatibility with code that does: for (const e of world.enemies) ...
    // ---------------------------
    return _createClass(World, [{
      key: "enemies",
      get: function get() {
        var agg = new Set();
        var _iterator = _createForOfIteratorHelper(this.chunkEnemies.values()),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var set = _step.value;
            var _iterator2 = _createForOfIteratorHelper(set),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var e = _step2.value;
                agg.add(e);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return agg;
      }

      // ---------------------------
      // Enemy lifecycle
      // ---------------------------
    }, {
      key: "spawnEnemy",
      value: function spawnEnemy(x, z) {
        var enemy = new Slime(this.game, x, z);
        this._addEnemyToChunk(enemy, this.getChunkId(x, z));
        return enemy;
      }

      // Robust move: keeps spatial index consistent even if a duplicate ever existed.
    }, {
      key: "moveEnemy",
      value: function moveEnemy(enemy, newX, newZ) {
        var oldChunk = this.getChunkId(enemy.x, enemy.z);
        var newChunk = this.getChunkId(newX, newZ);
        if (oldChunk !== newChunk) {
          // Remove from old (and any accidental duplicates elsewhere)
          this._removeEnemyFromAllChunks(enemy);

          // Add to new
          this._addEnemyToChunk(enemy, newChunk);
        }

        // Update actual position last
        enemy.x = newX;
        enemy.z = newZ;
      }
    }, {
      key: "destroyEnemy",
      value: function destroyEnemy(enemy) {
        // Remove from spatial index everywhere (defensive)
        this._removeEnemyFromAllChunks(enemy);

        // Destroy its PIXI sprite, etc.
        enemy.destroy();
      }

      // ---------------------------
      // Spatial queries
      // ---------------------------
    }, {
      key: "getEnemiesInChunk",
      value: function getEnemiesInChunk(chunkId) {
        return this.chunkEnemies.get(chunkId) || new Set();
      }
    }, {
      key: "getNearbyEnemies",
      value: function getNearbyEnemies(x, z) {
        var chunkRadius = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        var cx = Math.floor(x / this.chunkSize);
        var cz = Math.floor(z / this.chunkSize);
        var nearby = new Set();
        for (var dx = -chunkRadius; dx <= chunkRadius; dx++) {
          for (var dz = -chunkRadius; dz <= chunkRadius; dz++) {
            var id = "".concat(cx + dx, ",").concat(cz + dz);
            var set = this.chunkEnemies.get(id);
            if (set) {
              var _iterator3 = _createForOfIteratorHelper(set),
                _step3;
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var e = _step3.value;
                  nearby.add(e);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }
          }
        }
        return nearby;
      }

      // ---------------------------
      // Chunk / terrain management
      // ---------------------------
    }, {
      key: "updateChunks",
      value: function updateChunks(centerX, centerZ) {
        var chunkX = Math.floor(centerX / this.chunkSize);
        var chunkZ = Math.floor(centerZ / this.chunkSize);

        // Load needed chunks
        for (var dx = -Config.PLAYER.CHUNK_LOAD_DISTANCE; dx <= Config.PLAYER.CHUNK_LOAD_DISTANCE; dx++) {
          for (var dz = -Config.PLAYER.CHUNK_LOAD_DISTANCE; dz <= Config.PLAYER.CHUNK_LOAD_DISTANCE; dz++) {
            var targetX = chunkX + dx;
            var targetZ = chunkZ + dz;
            var id = "".concat(targetX, ",").concat(targetZ);
            if (!this.chunks.has(id)) {
              this.chunks.set(id, {
                blocks: this.generateTerrain(targetX, targetZ),
                needsUpdate: true
              });

              // Random enemy spawning
              if (Math.random() < Config.ENEMY.SPAWN_RATE) {
                var worldX = targetX * this.chunkSize + Math.random() * this.chunkSize;
                var worldZ = targetZ * this.chunkSize + Math.random() * this.chunkSize;
                this.spawnEnemy(worldX, worldZ);
              }
            }
          }
        }

        // Unload distant chunks (and their enemies)
        this.unloadDistantChunks(centerX, centerZ);
      }

      // In world.js generateTerrain()
    }, {
      key: "generateTerrain",
      value: function generateTerrain(chunkX, chunkZ) {
        var size = this.chunkSize;
        var blocks = Array(size).fill(null).map(function () {
          return Array(size).fill({
            type: 'grass'
          });
        });
        for (var x = 0; x < size; x++) {
          for (var z = 0; z < size; z++) {
            if (Math.random() < Config.TALL_GRASS.DENSITY) {
              var worldX = chunkX * size + x + 0.5;
              var worldZ = chunkZ * size + z + 0.5;
              this.tallGrass.add(new TallGrass(worldX, worldZ));
            }
          }
        }
        return blocks;
      }
    }, {
      key: "unloadDistantChunks",
      value: function unloadDistantChunks(playerX, playerZ) {
        var px = Math.floor(playerX / this.chunkSize);
        var pz = Math.floor(playerZ / this.chunkSize);

        // Collect chunkIds to remove first (avoid mutating while iterating)
        var removeIds = [];
        var _iterator4 = _createForOfIteratorHelper(this.chunks),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _step4$value = _slicedToArray(_step4.value, 1),
              chunkId = _step4$value[0];
            var _chunkId$split$map = chunkId.split(',').map(Number),
              _chunkId$split$map2 = _slicedToArray(_chunkId$split$map, 2),
              cx = _chunkId$split$map2[0],
              cz = _chunkId$split$map2[1];
            var dist = Math.max(Math.abs(cx - px), Math.abs(cz - pz));
            if (dist > Config.PLAYER.CHUNK_LOAD_DISTANCE) {
              removeIds.push(chunkId);
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        for (var _i = 0, _removeIds = removeIds; _i < _removeIds.length; _i++) {
          var id = _removeIds[_i];
          // Remove enemies in this chunk
          var set = this.chunkEnemies.get(id);
          if (set) {
            var _iterator5 = _createForOfIteratorHelper(set),
              _step5;
            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var enemy = _step5.value;
                enemy.destroy(); // remove from stage
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
            this.chunkEnemies["delete"](id);
          }

          // Remove terrain chunk
          this.chunks["delete"](id);
        }
        // Remove tall grass from unloaded chunks
        var _iterator6 = _createForOfIteratorHelper(this.tallGrass),
          _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var grass = _step6.value;
            var gx = Math.floor(grass.x / this.chunkSize);
            var gz = Math.floor(grass.z / this.chunkSize);
            var _dist = Math.max(Math.abs(gx - px), Math.abs(gz - pz));
            if (_dist > Config.PLAYER.CHUNK_LOAD_DISTANCE) {
              this.tallGrass["delete"](grass);
            }
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
      }

      // ---------------------------
      // Terrain helpers
      // ---------------------------
    }, {
      key: "getBlock",
      value: function getBlock(x, z) {
        var _chunk$blocks$localX;
        var chunk = this.getChunk(x, z);
        var localX = (Math.floor(x) % this.chunkSize + this.chunkSize) % this.chunkSize;
        var localZ = (Math.floor(z) % this.chunkSize + this.chunkSize) % this.chunkSize;
        return (chunk === null || chunk === void 0 || (_chunk$blocks$localX = chunk.blocks[localX]) === null || _chunk$blocks$localX === void 0 ? void 0 : _chunk$blocks$localX[localZ]) || null;
      }
    }, {
      key: "getChunk",
      value: function getChunk(x, z) {
        var id = this.getChunkId(x, z);
        return this.chunks.get(id);
      }
    }, {
      key: "getChunkId",
      value: function getChunkId(x, z) {
        var cx = Math.floor(x / this.chunkSize);
        var cz = Math.floor(z / this.chunkSize);
        return "".concat(cx, ",").concat(cz);
      }

      // ---------------------------
      // Internal helpers (index maintenance)
      // ---------------------------
    }, {
      key: "_addEnemyToChunk",
      value: function _addEnemyToChunk(enemy, chunkId) {
        if (!this.chunkEnemies.has(chunkId)) {
          this.chunkEnemies.set(chunkId, new Set());
        }
        this.chunkEnemies.get(chunkId).add(enemy);
      }
    }, {
      key: "_removeEnemyFromAllChunks",
      value: function _removeEnemyFromAllChunks(enemy) {
        var emptyChunks = [];
        var _iterator7 = _createForOfIteratorHelper(this.chunkEnemies),
          _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var _step7$value = _slicedToArray(_step7.value, 2),
              _cid = _step7$value[0],
              set = _step7$value[1];
            if (set["delete"](enemy) && set.size === 0) {
              emptyChunks.push(_cid);
            }
          }
          // Clean up empty sets
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
        for (var _i2 = 0, _emptyChunks = emptyChunks; _i2 < _emptyChunks.length; _i2++) {
          var cid = _emptyChunks[_i2];
          this.chunkEnemies["delete"](cid);
        }
      }
    }]);
  }();

  var IsometricRenderer = /*#__PURE__*/function () {
    function IsometricRenderer(app, world, game) {
      _classCallCheck(this, IsometricRenderer);
      this.app = app;
      this.world = world;
      this.game = game;
      this.particleContainer = new PIXI.ParticleContainer(500, {
        scale: true,
        position: true,
        rotation: true,
        uvs: true,
        alpha: true
      });

      // Main containers
      this.worldContainer = new PIXI.Container();
      this.playerContainer = new PIXI.Container();
      this.projectileContainer = new PIXI.Container();
      this.app.stage.addChild(this.worldContainer);
      this.app.stage.addChild(this.playerContainer);
      this.worldContainer.addChild(this.projectileContainer);
      this.worldContainer.addChild(this.particleContainer);

      // Tall grass particle containers (below / above)
      this.tallGrassContainersBelow = [];
      this.tallGrassContainersAbove = [];
      for (var i = 0; i < 3; i++) {
        var pc = new PIXI.ParticleContainer(1000, {
          scale: true,
          position: true,
          rotation: true,
          uvs: true,
          alpha: true
        });
        var worldIndex = this.app.stage.getChildIndex(this.worldContainer);
        this.app.stage.addChildAt(pc, Math.min(this.app.stage.children.length, worldIndex + 1 + i));
        this.tallGrassContainersBelow.push(pc);
      }
      for (var _i = 0; _i < 3; _i++) {
        var _pc = new PIXI.ParticleContainer(1000, {
          scale: true,
          position: true,
          rotation: true,
          uvs: true,
          alpha: true
        });
        var playerIndex = this.app.stage.getChildIndex(this.playerContainer);
        this.app.stage.addChildAt(_pc, Math.min(this.app.stage.children.length, playerIndex + 1 + _i));
        this.tallGrassContainersAbove.push(_pc);
      }

      // Preload textures
      this.grassTextures = [];
      for (var _i2 = 0; _i2 < 3; _i2++) {
        var tex = PIXI.Texture.from(Config.ASSETS.TALL_GRASS[_i2]);
        tex.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
        this.grassTextures.push(tex);
      }

      // Pools per blade type
      this.bladePools = [[], []]; // Index 0 for type 0, index 1 for type 2
      // Tile sprite pooling
      this.spritePool = [];
      this.grassPrototype = {
        anchorX: 0.5,
        anchorY: 1,
        width: Config.TALL_GRASS.WIDTH,
        height: Config.TALL_GRASS.HEIGHT
      };

      // Enemy container (keep above)
      this.enemyContainer = new PIXI.Container();
      this.app.stage.addChild(this.enemyContainer);

      // Atlas for ground tiles (same as before)
      this.atlas = {
        grass: {
          texture: PIXI.Texture.from(Config.ASSETS.GRASS_ATLAS),
          frames: []
        }
      };
      var _Config$ATLAS_INFO$GR = Config.ATLAS_INFO.GRASS,
        TILE_WIDTH = _Config$ATLAS_INFO$GR.TILE_WIDTH,
        TILE_HEIGHT = _Config$ATLAS_INFO$GR.TILE_HEIGHT,
        COUNT = _Config$ATLAS_INFO$GR.COUNT;
      for (var _i3 = 0; _i3 < COUNT; _i3++) {
        var frame = new PIXI.Rectangle(_i3 * TILE_WIDTH, 0, TILE_WIDTH, TILE_HEIGHT);
        this.atlas.grass.frames.push(new PIXI.Texture(this.atlas.grass.texture.baseTexture, frame));
      }
      this.atlas.grass.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
      this.chunkContainers = new Map();
      this.tileData = new WeakMap();
      this.debugContainer = new PIXI.Container();
      this.worldContainer.addChild(this.debugContainer);
      this.worldContainer.sortableChildren = true;
      this.projectileContainer.zIndex = 10;
      this.particleContainer.zIndex = 11;
      this.debugContainer.zIndex = 20;

      // Graphics for chunk borders
      this.chunkBorderGraphics = new PIXI.Graphics();
      this.debugContainer.addChild(this.chunkBorderGraphics);
    }
    return _createClass(IsometricRenderer, [{
      key: "render",
      value: function render() {
        var _this = this;
        // ensure chunks exist
        this.world.chunks.forEach(function (chunk, chunkId) {
          if (!_this.chunkContainers.has(chunkId)) _this.createChunkContainer(chunkId, chunk);
        });
        var _iterator = _createForOfIteratorHelper(this.chunkContainers),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _step$value = _slicedToArray(_step.value, 2),
              chunkId = _step$value[0],
              container = _step$value[1];
            if (!this.world.chunks.has(chunkId)) this.destroyChunkContainer(chunkId);
          }

          // ensure player sprite is in playerContainer
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        if (this.game.player.sprite.parent !== this.playerContainer) this.playerContainer.addChild(this.game.player.sprite);

        // enemies
        this.enemyContainer.removeChildren();
        var _iterator2 = _createForOfIteratorHelper(this.world.enemies),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var e = _step2.value;
            this.renderEnemy(e);
          }

          // tall grass (painter's algorithm uses player feet vs grass bottom)
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        this.renderTallGrass();

        // Render chunk borders
        this.renderChunkBorders();
      }
    }, {
      key: "renderChunkBorders",
      value: function renderChunkBorders() {
        var _this2 = this;
        this.chunkBorderGraphics.clear();
        this.chunkBorderGraphics.lineStyle(2, 0xff0000, 0.5);
        var _iterator3 = _createForOfIteratorHelper(this.world.chunks),
          _step3;
        try {
          var _loop = function _loop() {
            var _step3$value = _slicedToArray(_step3.value, 1),
              chunkId = _step3$value[0];
            var _chunkId$split$map = chunkId.split(',').map(Number),
              _chunkId$split$map2 = _slicedToArray(_chunkId$split$map, 2),
              chunkX = _chunkId$split$map2[0],
              chunkZ = _chunkId$split$map2[1];

            // Calculate world coordinates of chunk corners
            var worldX1 = chunkX * _this2.world.chunkSize;
            var worldZ1 = chunkZ * _this2.world.chunkSize;
            var worldX2 = (chunkX + 1) * _this2.world.chunkSize;
            var worldZ2 = (chunkZ + 1) * _this2.world.chunkSize;

            // Convert world coordinates to screen coordinates (isometric)
            var screenX1 = (worldX1 - worldZ1) * Config.TILE.WIDTH / 2;
            var screenY1 = (worldX1 + worldZ1) * Config.TILE.HEIGHT / 2;
            var screenX2 = (worldX1 - worldZ2) * Config.TILE.WIDTH / 2;
            var screenY2 = (worldX1 + worldZ2) * Config.TILE.HEIGHT / 2;
            var screenX3 = (worldX2 - worldZ2) * Config.TILE.WIDTH / 2;
            var screenY3 = (worldX2 + worldZ2) * Config.TILE.HEIGHT / 2;
            var screenX4 = (worldX2 - worldZ1) * Config.TILE.WIDTH / 2;
            var screenY4 = (worldX2 + worldZ1) * Config.TILE.HEIGHT / 2;

            // Draw the chunk border (rhombus shape in isometric view)
            _this2.chunkBorderGraphics.moveTo(screenX1, screenY1);
            _this2.chunkBorderGraphics.lineTo(screenX2, screenY2);
            _this2.chunkBorderGraphics.lineTo(screenX3, screenY3);
            _this2.chunkBorderGraphics.lineTo(screenX4, screenY4);
            _this2.chunkBorderGraphics.lineTo(screenX1, screenY1);

            // Add chunk ID text in the center of the chunk
            var centerX = ((worldX1 + worldX2) / 2 - (worldZ1 + worldZ2) / 2) * Config.TILE.WIDTH / 2;
            var centerY = ((worldX1 + worldX2) / 2 + (worldZ1 + worldZ2) / 2) * Config.TILE.HEIGHT / 2;
            var text = new PIXI.Text(chunkId, {
              fontSize: 12,
              fill: 0xff0000,
              align: 'center'
            });
            text.anchor.set(0.5);
            text.position.set(centerX, centerY);
            _this2.debugContainer.addChild(text);

            // Remove text after a short time to avoid accumulation
            setTimeout(function () {
              if (text.parent) text.parent.removeChild(text);
            }, 1000);
          };
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
    }, {
      key: "renderTallGrass",
      value: function renderTallGrass() {
        var _playerSprite$anchor$,
          _playerSprite$anchor,
          _this3 = this;
        var TILE_W = Config.TILE.WIDTH;
        var TILE_H = Config.TILE.HEIGHT;

        // compute player's feet world-position (convert sprite bottom pixel offset -> world tiles)
        var playerSprite = this.game.player.sprite;
        var playerAnchorY = (_playerSprite$anchor$ = (_playerSprite$anchor = playerSprite.anchor) === null || _playerSprite$anchor === void 0 ? void 0 : _playerSprite$anchor.y) !== null && _playerSprite$anchor$ !== void 0 ? _playerSprite$anchor$ : 0.5;
        var playerPixelBottomOffset = playerSprite.height * (1 - playerAnchorY);
        // account for camera zoom so we convert screen pixels back to world-tile units
        var dWorld = playerPixelBottomOffset / TILE_H / (Config.CAMERA.ZOOM );
        var playerFeetX = this.game.player.x + dWorld;
        var playerFeetZ = this.game.player.z + dWorld;

        // clear containers and pool children
        var clearAndPool = function clearAndPool(containers) {
          for (var ti = 0; ti < containers.length; ti++) {
            var pc = containers[ti];
            while (pc.children.length) {
              var child = pc.children[pc.children.length - 1];
              pc.removeChildAt(pc.children.length - 1);
              var type = child && child._bladeType != null ? child._bladeType === 2 ? 1 : 0 // Map type 2 to pool index 1
              : ti;
              _this3.returnBladeToPool(type, child);
            }
          }
        };
        clearAndPool(this.tallGrassContainersBelow);
        clearAndPool(this.tallGrassContainersAbove);

        // decide above/below using player's FEET (playerFeetX/playerFeetZ) instead of sprite head/center
        var playerFootScreenY = (playerFeetX + playerFeetZ) * TILE_H / 2;
        var _iterator4 = _createForOfIteratorHelper(this.game.world.tallGrass),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var grass = _step4.value;
            if (!grass.currentRotations) continue;
            if (typeof grass.applyRepel === "function") grass.applyRepel(playerFeetX, playerFeetZ);
            var grassBaseY = (grass.x + grass.z) * TILE_H / 2;
            var grassBottomY = grassBaseY + (Config.TALL_GRASS.Y_OFFSET || 0);
            var containersSet = grassBottomY < playerFootScreenY ? this.tallGrassContainersBelow : this.tallGrassContainersAbove;

            // Only render two blades now (types 0 and 2)
            for (var i = 0; i < 2; i++) {
              var bladeType = i === 0 ? 0 : 2; // Use texture 0 and 2 (skip middle one)
              var blade = this.getPooledBlade(bladeType);
              blade._bladeType = bladeType;
              blade.anchor.set(this.grassPrototype.anchorX, this.grassPrototype.anchorY);
              blade.width = this.grassPrototype.width;
              blade.height = this.grassPrototype.height;
              var bx = grass.x;
              var bz = grass.z;
              var screenX = (bx - bz) * TILE_W / 2; // Adjusted spacing for two blades
              var screenY = (bx + bz) * TILE_H / 2 + Config.TALL_GRASS.Y_OFFSET;
              blade.rotation = grass.currentRotations[i] + (grass.bladeRotationOffsets[i] || 0);
              blade.position.set(screenX, screenY);
              blade.visible = true;
              containersSet[bladeType].addChild(blade);
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
    }, {
      key: "getPooledBlade",
      value: function getPooledBlade(typeIndex) {
        // Map type 2 to pool index 1
        var poolIndex = typeIndex === 2 ? 1 : 0;
        var pool = this.bladePools[poolIndex];
        if (pool.length) return pool.pop();

        // Use the original typeIndex for texture lookup
        var tex = this.grassTextures[typeIndex];
        var sprite = new PIXI.Sprite(tex);
        sprite._bladeType = typeIndex; // Store original type
        sprite.anchor.set(this.grassPrototype.anchorX, this.grassPrototype.anchorY);
        sprite.width = this.grassPrototype.width;
        sprite.height = this.grassPrototype.height;
        sprite.visible = true;
        sprite.rotation = 0;
        return sprite;
      }
    }, {
      key: "returnBladeToPool",
      value: function returnBladeToPool(typeIndex, blade) {
        if (!blade || !(blade instanceof PIXI.Sprite)) return;

        // Determine pool index (type 2 goes to pool 1)
        var type = typeof typeIndex === "number" ? typeIndex === 2 ? 1 : 0 : blade._bladeType === 2 ? 1 : 0;
        blade.visible = false;
        blade.rotation = 0;
        blade.position.set(0, 0);
        var pool = this.bladePools[type];
        var max = Config.WORLD && Config.WORLD.MAX_POOL_SIZE || 500;
        if (pool.length < max) pool.push(blade);else blade.texture = null;
      }
    }, {
      key: "renderEnemy",
      value: function renderEnemy(enemy) {
        var screenX = (enemy.x - enemy.z) * Config.TILE.WIDTH / 2;
        var screenY = (enemy.x + enemy.z) * Config.TILE.HEIGHT / 2;
        enemy.sprite.position.set(screenX, screenY);
        if (!enemy.sprite.parent) this.enemyContainer.addChild(enemy.sprite);
      }
    }, {
      key: "createChunkContainer",
      value: function createChunkContainer(chunkId, chunk) {
        var container = new PIXI.ParticleContainer(this.world.chunkSize * this.world.chunkSize, {
          scale: true,
          position: true,
          rotation: false,
          uvs: true,
          alpha: false
        });
        var _chunkId$split$map3 = chunkId.split(",").map(Number),
          _chunkId$split$map4 = _slicedToArray(_chunkId$split$map3, 2),
          chunkX = _chunkId$split$map4[0],
          chunkZ = _chunkId$split$map4[1];
        var offsetX = (chunkX - chunkZ) * (Config.TILE.WIDTH / 2) * this.world.chunkSize;
        var offsetY = (chunkX + chunkZ) * (Config.TILE.HEIGHT / 2) * this.world.chunkSize;
        container.position.set(offsetX, offsetY);
        for (var x = 0; x < this.world.chunkSize; x++) {
          for (var z = 0; z < this.world.chunkSize; z++) {
            if (chunk.blocks[x][z]) {
              var sprite = this.getPooledSprite();
              this.setupTileSprite(sprite, chunkId, x, z);
              container.addChild(sprite);
            }
          }
        }
        this.chunkContainers.set(chunkId, container);
        this.worldContainer.addChild(container);
      }
    }, {
      key: "destroyChunkContainer",
      value: function destroyChunkContainer(chunkId) {
        var container = this.chunkContainers.get(chunkId);
        if (!container) return;
        var children = container.children.slice();
        var _iterator5 = _createForOfIteratorHelper(children),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var sprite = _step5.value;
            container.removeChild(sprite);
            this.returnSpriteToPool(sprite);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
        this.worldContainer.removeChild(container);
        this.chunkContainers["delete"](chunkId);
      }
    }, {
      key: "getPooledSprite",
      value: function getPooledSprite() {
        return this.spritePool.pop() || new PIXI.Sprite();
      }
    }, {
      key: "returnSpriteToPool",
      value: function returnSpriteToPool(sprite) {
        sprite.texture = null;
        sprite.visible = false;
        this.spritePool.push(sprite);
        var max = Config.WORLD && Config.WORLD.MAX_POOL_SIZE || 500;
        if (this.spritePool.length > max) this.spritePool.length = max;
      }
    }, {
      key: "setupTileSprite",
      value: function setupTileSprite(sprite, chunkId, x, z) {
        var seed = "".concat(chunkId, "-").concat(x, "-").concat(z);
        var hash = 0;
        for (var i = 0; i < seed.length; i++) {
          hash = (hash << 5) - hash + seed.charCodeAt(i);
          hash |= 0;
        }
        var texIndex = Math.abs(hash) % this.atlas.grass.frames.length;
        sprite.texture = this.atlas.grass.frames[texIndex];
        sprite.anchor.set(0.5, 0.5);
        sprite.position.set((x - z) * Config.TILE.WIDTH / 2, (x + z) * Config.TILE.HEIGHT / 2);
        sprite.visible = true;
        this.tileData.set(sprite, {
          chunkId: chunkId,
          x: x,
          z: z
        });
      }
    }, {
      key: "updateCamera",
      value: function updateCamera() {
        var screenX = (this.game.player.x - this.game.player.z) * Config.TILE.WIDTH / 2;
        var screenY = (this.game.player.x + this.game.player.z) * Config.TILE.HEIGHT / 2;
        this.worldContainer.position.set(this.app.screen.width / 2 - screenX * Config.CAMERA.ZOOM, this.app.screen.height / 2 - screenY * Config.CAMERA.ZOOM + Config.CAMERA.OFFSET_Y);
        this.worldContainer.scale.set(Config.CAMERA.ZOOM);
        this.playerContainer.position.set(this.app.screen.width / 2, this.app.screen.height / 2 + Config.CAMERA.OFFSET_Y);
        this.playerContainer.scale.set(Config.CAMERA.ZOOM);

        // enemyContainer stays on stage so keep copying it
        this.enemyContainer.position.copyFrom(this.worldContainer.position);
        this.enemyContainer.scale.copyFrom(this.worldContainer.scale);
        for (var _i4 = 0, _arr = [].concat(_toConsumableArray(this.tallGrassContainersBelow), _toConsumableArray(this.tallGrassContainersAbove)); _i4 < _arr.length; _i4++) {
          var pc = _arr[_i4];
          pc.position.copyFrom(this.worldContainer.position);
          pc.scale.copyFrom(this.worldContainer.scale);
        }
      }
    }]);
  }();

  var Arrow = /*#__PURE__*/function () {
    function Arrow(game, x, z, direction, speed, damage, maxDistance) {
      var knockback = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1;
      _classCallCheck(this, Arrow);
      this.game = game;
      this.x = x;
      this.z = z;
      this.direction = {
        x: direction.x,
        z: direction.z
      };
      this.speed = speed;
      this.damage = damage;
      this.distanceTraveled = 0;
      this.maxDistance = maxDistance;
      this.destroyed = false; // Add destroyed flag
      this.knockback = knockback;

      // Create arrow sprite (centered horizontally)
      this.sprite = new PIXI.Graphics();
      this.sprite.beginFill(0xFFFFFF); // White color
      this.sprite.lineStyle(2, 0x000000); // Black outline
      this.sprite.drawRect(-15, -4, 30, 8); // Arrow shape (points to +x in screen-space)
      this.sprite.endFill();

      // Position and rotate the arrow - FIXED ROTATION
      var screenX = (this.x - this.z) * Config.TILE.WIDTH / 2;
      var screenY = (this.x + this.z) * Config.TILE.HEIGHT / 2;
      this.sprite.position.set(screenX, screenY);

      // Compute screen-space direction and rotation so the arrow visually points along its screen movement
      var dx = this.direction.x;
      var dz = this.direction.z;
      var screenDX = (dx - dz) * (Config.TILE.WIDTH / 2);
      var screenDY = (dx + dz) * (Config.TILE.HEIGHT / 2);
      this.sprite.rotation = Math.atan2(screenDY, screenDX);
      this.game.renderer.projectileContainer.addChild(this.sprite);
    }
    return _createClass(Arrow, [{
      key: "update",
      value: function update(delta) {
        if (this.destroyed) return false; // Don't update if destroyed

        // Move arrow (delta is ticker delta; keep movement consistent with other movement)
        var moveX = this.direction.x * this.speed * delta;
        var moveZ = this.direction.z * this.speed * delta;
        this.x += moveX;
        this.z += moveZ;
        this.distanceTraveled += Math.hypot(moveX, moveZ);

        // Update sprite position and rotation (in case camera/iso changes)
        var screenX = (this.x - this.z) * Config.TILE.WIDTH / 2;
        var screenY = (this.x + this.z) * Config.TILE.HEIGHT / 2;
        this.sprite.position.set(screenX, screenY);

        // Recompute rotation so arrow matches screen-space motion
        var screenDX = this.direction.x - this.direction.z;
        var screenDY = this.direction.x + this.direction.z;
        var angle = Math.atan2(screenDY * (Config.TILE.HEIGHT / 2), screenDX * (Config.TILE.WIDTH / 2));
        this.sprite.rotation = angle;

        // Check for collisions
        if (this.checkCollisions()) {
          return false; // Stop updating if collision occurred
        }

        // Remove if traveled max distance
        if (this.distanceTraveled >= this.maxDistance) {
          this.destroy();
          return false;
        }
        return true;
      }
    }, {
      key: "checkCollisions",
      value: function checkCollisions() {
        if (this.destroyed) return true; // Already destroyed

        var nearbyEnemies = this.game.world.getNearbyEnemies(this.x, this.z, 2);
        var _iterator = _createForOfIteratorHelper(nearbyEnemies),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var enemy = _step.value;
            var dx = enemy.x - this.x;
            var dz = enemy.z - this.z;
            var dist = Math.hypot(dx, dz);
            var hitRadius = typeof enemy.radius === 'number' ? enemy.radius : Config.ENEMY.HITBOX_RADIUS;
            if (dist <= hitRadius) {
              var died = enemy.takeDamage(this.damage, this.knockback, this.direction);
              if (died) this.game.world.destroyEnemy(enemy);
              this.destroy();
              return true; // Collision occurred
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return false; // No collision
      }
    }, {
      key: "destroy",
      value: function destroy() {
        if (this.destroyed) return; // Already destroyed

        this.destroyed = true;
        if (this.sprite && this.sprite.parent) {
          this.sprite.parent.removeChild(this.sprite);
        }
        // Clear references
        this.sprite = null;
      }
    }]);
  }();

  var Combat = /*#__PURE__*/function () {
    function Combat(player, game) {
      _classCallCheck(this, Combat);
      this.player = player;
      this.game = game;

      // Swing visual (simple wedge) — owned by Combat now
      this.swing = new PIXI.Graphics();
      this.swing.visible = false;
      // add behind the player sprite
      this.player.sprite.addChildAt(this.swing, 0);
      this._swingTimer = 0;

      // Per-attack last-used timestamps (ms)
      this._lastAttackTimes = Object.create(null);

      // tiny global lock (ms) to avoid double-triggering different actions in same frame
      this._globalLockMs = 30;
      this._globalLockUntil = 0;

      // Charge state for ranged weapons
      this._chargeStartTime = 0;
      this._isCharging = false;
      this._chargePower = 0; // raw linear 0..1 used for visuals; scaled power used for shot math

      this._chargeVisual = null;
    }
    return _createClass(Combat, [{
      key: "quickAttack",
      value: function quickAttack() {
        if (!this.player.inventory.getEquippedItem()) return;
        this.attack('QUICK');
      }
    }, {
      key: "pokeAttack",
      value: function pokeAttack() {
        if (!this.player.inventory.getEquippedItem()) return;
        this.attack('POKE');
      }
    }, {
      key: "heavyAttack",
      value: function heavyAttack() {
        if (!this.player.inventory.getEquippedItem()) return;
        this.attack('HEAVY');
      }

      // Start charging a ranged weapon
    }, {
      key: "startCharge",
      value: function startCharge() {
        var instantFullCharge = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var weapon = this.player.inventory.getEquippedItem();
        if (!weapon || weapon.type !== 'ranged') return;
        var now = Date.now();
        if (now < this._globalLockUntil) return; // small lock

        this._isCharging = true;
        this._chargeStartTime = now;
        this._chargePower = 0;
        this._createChargeVisual();
        if (instantFullCharge) {
          // immediate half-power fire (right-click quick shot)
          this.releaseCharge(0.5);
        }
      }

      // Release charge and shoot
    }, {
      key: "releaseCharge",
      value: function releaseCharge() {
        var _ref, _weapon$cooldown;
        var forcedPower = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        if (!this._isCharging && forcedPower == null) return;
        var weapon = this.player.inventory.getEquippedItem();
        if (!weapon || weapon.type !== 'ranged') {
          this._cleanupCharge();
          return;
        }
        var now = Date.now();

        // compute raw linear power (0..1)
        var rawPower;
        if (forcedPower !== null) {
          rawPower = Math.max(0, Math.min(1, forcedPower));
        } else {
          var _weapon$maxChargeTime;
          var elapsed = Math.max(0, now - this._chargeStartTime);
          var maxCharge = (_weapon$maxChargeTime = weapon.maxChargeTime) !== null && _weapon$maxChargeTime !== void 0 ? _weapon$maxChargeTime : 450; // shorter, crisp feel (ms)
          rawPower = Math.min(1, elapsed / maxCharge);

          // tap shots: allow quick taps with a small sensible minimum
          var minTapMs = 50;
          if (elapsed < minTapMs) rawPower = 0.08;
        }

        // Respect SHOOT cooldown (per-attack cooldown map)
        var attackKey = 'SHOOT';
        var attackConfig = Config.ATTACK_TYPES && Config.ATTACK_TYPES.SHOOT || {};
        var specificCooldown = (_ref = (_weapon$cooldown = weapon.cooldown) !== null && _weapon$cooldown !== void 0 ? _weapon$cooldown : attackConfig.COOLDOWN) !== null && _ref !== void 0 ? _ref : this.player.attackCooldown;
        var last = this._lastAttackTimes[attackKey] || 0;
        if (now - last >= specificCooldown && now >= this._globalLockUntil) {
          this._lastAttackTimes[attackKey] = now;
          this._globalLockUntil = now + this._globalLockMs;
          this.shoot(rawPower); // pass rawPower, shoot() will apply scaling again
          this.player.lastAttackTime = now;
        }
        this._cleanupCharge();
      }

      // Clean up charge state and visual
    }, {
      key: "_cleanupCharge",
      value: function _cleanupCharge() {
        this._isCharging = false;
        this._chargeStartTime = 0;
        this._chargePower = 0;
        this._removeChargeVisual();
      }

      // Create visual feedback for charging
    }, {
      key: "_createChargeVisual",
      value: function _createChargeVisual() {
        this._removeChargeVisual();
        this._chargeVisual = new PIXI.Graphics();
        // put above player sprite so it's visible
        this.player.sprite.addChild(this._chargeVisual);
        this._updateChargeVisual();
      }

      // Update charge visual based on current power (linear)
    }, {
      key: "_updateChargeVisual",
      value: function _updateChargeVisual() {
        if (!this._chargeVisual) return;
        this._chargeVisual.clear();

        // Draw a ring that grows with chargePower
        var rBase = 18;
        var radius = rBase + this._chargePower * 40;
        var alpha = 0.25 + this._chargePower * 0.6;
        this._chargeVisual.lineStyle(2, 0x00FFFF, alpha);
        this._chargeVisual.beginFill(0x00FFFF, alpha * 0.25);
        this._chargeVisual.drawCircle(0, 0, radius);
        this._chargeVisual.endFill();

        // small inner dot to show center
        this._chargeVisual.beginFill(0x000000, 0.4);
        this._chargeVisual.drawCircle(0, 0, 4);
        this._chargeVisual.endFill();
      }

      // Remove charge visual
    }, {
      key: "_removeChargeVisual",
      value: function _removeChargeVisual() {
        if (this._chargeVisual && this._chargeVisual.parent) {
          this._chargeVisual.parent.removeChild(this._chargeVisual);
        }
        this._chargeVisual = null;
      }
    }, {
      key: "_drawSwingVisual",
      value: function _drawSwingVisual(attackType) {
        var _Config$ATTACK_TYPES, _attackConfig$RANGE;
        this.swing.clear();
        var attackConfig = ((_Config$ATTACK_TYPES = Config.ATTACK_TYPES) === null || _Config$ATTACK_TYPES === void 0 ? void 0 : _Config$ATTACK_TYPES[attackType]) || Config.ATTACK_TYPES.NORMAL || {};
        var R = (_attackConfig$RANGE = attackConfig.RANGE) !== null && _attackConfig$RANGE !== void 0 ? _attackConfig$RANGE : this.player.attackRange;
        if (attackType === 'POKE') {
          var _attackConfig$WIDTH;
          var width = (_attackConfig$WIDTH = attackConfig.WIDTH) !== null && _attackConfig$WIDTH !== void 0 ? _attackConfig$WIDTH : 0.3;
          this.swing.lineStyle(2, 0x00FFFF, 0.8);
          this.swing.beginFill(0x00FFFF, 0.15);
          var W = Config.TILE.WIDTH;
          var H = Config.TILE.HEIGHT;
          var tipX = (this.player.facing.x - this.player.facing.z) * W / 2 * R;
          var tipY = (this.player.facing.x + this.player.facing.z) * H / 2 * R;
          var perpX = -this.player.facing.z;
          this.player.facing.x;
          var base1X = (this.player.facing.x * 0.5 + perpX * width - this.player.facing.z * 0.5) * W / 2;
          var base1Y = (this.player.facing.x * 0.5 + perpX * width + this.player.facing.z * 0.5) * H / 2;
          var base2X = (this.player.facing.x * 0.5 - perpX * width - this.player.facing.z * 0.5) * W / 2;
          var base2Y = (this.player.facing.x * 0.5 - perpX * width + this.player.facing.z * 0.5) * H / 2;
          this.swing.moveTo(0, 0);
          this.swing.lineTo(base1X, base1Y);
          this.swing.lineTo(tipX, tipY);
          this.swing.lineTo(base2X, base2Y);
          this.swing.lineTo(0, 0);
        } else {
          // wedge for slashes/quick/heavy
          var cosHalfArc = Math.cos(this.player.attackArc / 2);
          this.swing.lineStyle(2, 0xFFFFFF, 0.8);
          this.swing.beginFill(0xFFFFFF, 0.15);
          this.swing.moveTo(0, 0);
          var angle1 = Math.acos(cosHalfArc);
          var angle2 = -angle1;
          var _W = Config.TILE.WIDTH;
          var _H = Config.TILE.HEIGHT;
          var segments = 16;
          for (var i = 0; i <= segments; i++) {
            var t = i / segments;
            var angle = angle1 + t * (angle2 - angle1);
            var wx = this.player.facing.x * Math.cos(angle) - this.player.facing.z * Math.sin(angle);
            var wz = this.player.facing.x * Math.sin(angle) + this.player.facing.z * Math.cos(angle);
            var sx = (wx - wz) * _W / 2 * R;
            var sy = (wx + wz) * _H / 2 * R;
            this.swing.lineTo(sx, sy);
          }
          this.swing.lineTo(0, 0);
        }
        this.swing.endFill();
        this.swing.alpha = 1;
        this.swing.visible = true;
      }

      // circle-sector intersection + attack processing
    }, {
      key: "attack",
      value: function attack() {
        var _Config$ATTACK_TYPES2, _attackConfig$COOLDOW, _attackConfig$SWING_T, _attackConfig$RANGE2, _attackConfig$WIDTH2, _ref2;
        var attackType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'SLASH';
        var weapon = this.player.inventory.getEquippedItem();
        var attackConfig = ((_Config$ATTACK_TYPES2 = Config.ATTACK_TYPES) === null || _Config$ATTACK_TYPES2 === void 0 ? void 0 : _Config$ATTACK_TYPES2[attackType]) || Config.ATTACK_TYPES.SLASH || {};
        var now = Date.now();

        // tiny global lock
        if (now < this._globalLockUntil) return;

        // per-attack cooldown
        var specificCooldown = (_attackConfig$COOLDOW = attackConfig.COOLDOWN) !== null && _attackConfig$COOLDOW !== void 0 ? _attackConfig$COOLDOW : this.player.attackCooldown;
        var last = this._lastAttackTimes[attackType] || 0;
        if (now - last < specificCooldown) return;

        // If a ranged weapon is equipped, ignore non-SHOOT attack types
        if (weapon && weapon.type === 'ranged' && attackType !== 'SHOOT') {
          return;
        }

        // mark usage
        this._lastAttackTimes[attackType] = now;
        this._globalLockUntil = now + this._globalLockMs;
        this.player.lastAttackTime = now;

        // Handle shooting (if someone calls attack('SHOOT') directly)
        if (attackType === 'SHOOT') {
          // If we had been charging, prefer that; otherwise full power instant shot.
          var powerToUse = this._chargePower || 1;
          this._chargePower = 0;
          this.shoot(powerToUse);
          return;
        }

        // ---- existing melee logic unchanged ----
        this._swingTimer = (_attackConfig$SWING_T = attackConfig.SWING_TIME) !== null && _attackConfig$SWING_T !== void 0 ? _attackConfig$SWING_T : this.player.attackSwingTime;
        this._drawSwingVisual(attackType);
        var R = (_attackConfig$RANGE2 = attackConfig.RANGE) !== null && _attackConfig$RANGE2 !== void 0 ? _attackConfig$RANGE2 : this.player.attackRange;
        var halfArc = attackType === 'POKE' ? Math.atan2((_attackConfig$WIDTH2 = attackConfig.WIDTH) !== null && _attackConfig$WIDTH2 !== void 0 ? _attackConfig$WIDTH2 : 0.3, R) : this.player.attackArc / 2;
        var cosHalf = Math.cos(halfArc);
        var searchChunks = (_ref2 = Config.PLAYER && Config.PLAYER.SEARCH_CHUNKS) !== null && _ref2 !== void 0 ? _ref2 : 2;
        var nearby = Array.from(this.game.world.getNearbyEnemies(this.player.x, this.player.z, searchChunks));
        var toKill = [];
        for (var _i = 0, _nearby = nearby; _i < _nearby.length; _i++) {
          var enemy = _nearby[_i];
          var dx = enemy.x - this.player.x;
          var dz = enemy.z - this.player.z;
          var dist = Math.hypot(dx, dz);
          var er = typeof enemy.radius === 'number' ? enemy.radius : Config.ENEMY.HITBOX_RADIUS;
          if (dist <= R + er) {
            var nx = dist > 0 ? dx / dist : this.player.facing.x;
            var nz = dist > 0 ? dz / dist : this.player.facing.z;
            var dot = nx * this.player.facing.x + nz * this.player.facing.z;
            if (dot >= cosHalf) {
              var _attackConfig$DAMAGE, _attackConfig$KNOCKBA;
              var knockbackDir = {
                x: attackType === 'POKE' ? this.player.facing.x : nx,
                z: attackType === 'POKE' ? this.player.facing.z : nz
              };
              var died = enemy.takeDamage((_attackConfig$DAMAGE = attackConfig.DAMAGE) !== null && _attackConfig$DAMAGE !== void 0 ? _attackConfig$DAMAGE : this.player.attackDamage, (_attackConfig$KNOCKBA = attackConfig.KNOCKBACK) !== null && _attackConfig$KNOCKBA !== void 0 ? _attackConfig$KNOCKBA : 0, knockbackDir, attackType);
              if (died) toKill.push(enemy);
            }
          }
        }
        for (var _i2 = 0, _toKill = toKill; _i2 < _toKill.length; _i2++) {
          var e = _toKill[_i2];
          this.game.world.destroyEnemy(e);
        }
      }

      // Improved shoot method with charge scaling
      // chargePower expected raw linear 0..1
    }, {
      key: "shoot",
      value: function shoot() {
        var _weapon$knockback;
        var chargePower = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        var weapon = this.player.inventory.getEquippedItem();
        if (!weapon || weapon.type !== 'ranged') return;

        // scale curve (same exponent as release)
        var curveExp = 1.8;
        var scaled = Math.pow(Math.max(0, Math.min(1, chargePower)), curveExp);

        // Scale properties based on scaled power (0-1)
        var minDamage = weapon.damage || 2;
        var maxDamage = weapon.maxDamage || minDamage * 2;
        var damage = minDamage + (maxDamage - minDamage) * scaled;
        var minSpeed = weapon.projectileSpeed || 0.2;
        var maxSpeed = weapon.maxProjectileSpeed || minSpeed * 1.5;
        var speed = minSpeed + (maxSpeed - minSpeed) * scaled;
        var minRange = weapon.range || 10;
        var maxRange = weapon.maxRange || minRange * 1.5;
        var range = minRange + (maxRange - minRange) * scaled;
        var baseKnock = (_weapon$knockback = weapon.knockback) !== null && _weapon$knockback !== void 0 ? _weapon$knockback : 0.2;
        var knockback = baseKnock * (0.5 + 1.5 * scaled);

        // Create arrow slightly in front of player
        var offset = 0.6;
        var arrowX = this.player.x + this.player.facing.x * offset;
        var arrowZ = this.player.z + this.player.facing.z * offset;
        var arrow = new Arrow(this.game, arrowX, arrowZ, {
          x: this.player.facing.x,
          z: this.player.facing.z
        }, speed, damage, range, knockback);
        this.game.projectiles.push(arrow);

        // Visual feedback for shooting
        this._createShootEffect(scaled);
      }

      // Create visual effect when shooting
    }, {
      key: "_createShootEffect",
      value: function _createShootEffect(chargeScaled) {
        var effect = new PIXI.Graphics();
        effect.lineStyle(2, 0xFFFF00, 0.85);
        effect.beginFill(0xFFFF00, 0.25);
        effect.drawCircle(0, 0, 8 + chargeScaled * 28);
        effect.endFill();
        this.player.sprite.addChild(effect);

        // Animate and remove effect
        var startTime = Date.now();
        var _animate = function animate() {
          var elapsed = Date.now() - startTime;
          var progress = Math.min(1, elapsed / 220);
          effect.alpha = 1 - progress;
          effect.scale.set(1 + progress * 1.8);
          if (progress < 1) requestAnimationFrame(_animate);else if (effect.parent) effect.parent.removeChild(effect);
        };
        _animate();
      }
    }, {
      key: "update",
      value: function update(delta) {
        if (this._swingTimer > 0) {
          var dt = this.game.app.ticker.elapsedMS || delta * (1000 / 60);
          this._swingTimer -= dt;
          var swingTime = Config.ATTACK_TYPES && Config.ATTACK_TYPES.NORMAL && Config.ATTACK_TYPES.NORMAL.SWING_TIME || this.player.attackSwingTime;
          this.swing.alpha = Math.max(0, this._swingTimer / swingTime);
          if (this._swingTimer <= 0) {
            this.swing.visible = false;
            this.swing.clear();
          }
        }

        // Update charge visual if charging
        if (this._isCharging) {
          var weapon = this.player.inventory.getEquippedItem();
          var now = Date.now();
          var maxCharge = weapon && weapon.maxChargeTime ? weapon.maxChargeTime : 450;
          var elapsed = Math.max(0, now - this._chargeStartTime);
          this._chargePower = Math.min(1, elapsed / maxCharge); // linear for visual
          this._updateChargeVisual();
        }
      }
    }]);
  }();

  var Inventory = /*#__PURE__*/function () {
    function Inventory(player) {
      _classCallCheck(this, Inventory);
      this.player = player;
      this.items = [];
      this.equippedItem = null;
      this.maxSlots = 10;
      this.equipmentChangeCallbacks = []; // Add this line

      // Initialize with basic weapons
      this.addItem({
        id: 'basic_sword',
        name: 'Basic Sword',
        type: 'weapon',
        damage: Config.PLAYER.ATTACK_DAMAGE,
        range: Config.PLAYER.ATTACK_RANGE,
        attacks: ['QUICK', 'POKE', 'HEAVY', 'SLASH'],
        texture: 'assets/sword.png'
      });

      // Add bow with proper ranged properties
      this.addItem({
        id: 'wooden_bow',
        name: 'Wooden Bow',
        type: 'ranged',
        damage: 2,
        range: Config.ATTACK_TYPES.SHOOT.RANGE,
        attacks: ['SHOOT'],
        cooldown: Config.ATTACK_TYPES.SHOOT.COOLDOWN,
        projectileSpeed: Config.ATTACK_TYPES.SHOOT.PROJECTILE_SPEED,
        maxChargeTime: 1000,
        // 1 second to full charge
        texture: 'assets/bow.png'
      });
    }

    // Add event listener method
    return _createClass(Inventory, [{
      key: "onEquipmentChange",
      value: function onEquipmentChange(callback) {
        this.equipmentChangeCallbacks.push(callback);
      }

      // Trigger equipment change events
    }, {
      key: "_notifyEquipmentChange",
      value: function _notifyEquipmentChange() {
        this.equipmentChangeCallbacks.forEach(function (callback) {
          return callback();
        });
      }
    }, {
      key: "addItem",
      value: function addItem(item) {
        if (this.items.length >= this.maxSlots) return false;
        this.items.push(item);
        return true;
      }
    }, {
      key: "removeItem",
      value: function removeItem(itemId) {
        var index = this.items.findIndex(function (item) {
          return item.id === itemId;
        });
        if (index !== -1) {
          this.items.splice(index, 1);
          return true;
        }
        return false;
      }
    }, {
      key: "equipItem",
      value: function equipItem(itemId) {
        var item = this.items.find(function (item) {
          return item.id === itemId;
        });
        // Allow both 'weapon' and 'ranged' types to be equipped
        if (item && (item.type === 'weapon' || item.type === 'ranged')) {
          // If already equipped, unequip instead
          if (this.equippedItem && this.equippedItem.id === itemId) {
            this.unequipItem();
            return false;
          }
          this.equippedItem = item;
          this.player.updateWeaponStats();
          this._notifyEquipmentChange(); // Notify UI
          return true;
        }
        return false;
      }
    }, {
      key: "unequipItem",
      value: function unequipItem() {
        this.equippedItem = null;
        this.player.updateWeaponStats();
        this._notifyEquipmentChange(); // Notify UI
      }
    }, {
      key: "getInventory",
      value: function getInventory() {
        return this.items;
      }
    }, {
      key: "getEquippedItem",
      value: function getEquippedItem() {
        return this.equippedItem;
      }
    }]);
  }();

  var Player = /*#__PURE__*/function () {
    function Player(game) {
      _classCallCheck(this, Player);
      this.game = game;
      this.x = 0;
      this.z = 0;
      this.lastAttackTime = 0;

      // Initialize inventory
      this.inventory = new Inventory(this);

      // Config + defaults (will be updated by equipped weapon)
      this.attackRange = 1.6;
      this.attackDamage = 1;
      this.attackCooldown = 200; // ms
      this.attackArc = Math.PI / 2; // 90°
      this.attackSwingTime = 120; // ms

      this.inventory.equipItem('basic_sword');

      // Facing/mouse state
      this.mouseScreen = {
        x: 1,
        y: 0
      };
      this.facing = {
        x: 1,
        z: 0
      };
      this._recomputeFacing();

      // Sprite
      this.sprite = PIXI.Sprite.from(Config.ASSETS.PLAYER);
      this.sprite.anchor.set(0.5, 0.5);
      this.sprite.width = Config.PLAYER.WIDTH;
      this.sprite.height = Config.PLAYER.HEIGHT;

      // Debug hitbox visualization
      this.hitboxVisual = new PIXI.Graphics();
      this.hitboxVisual.lineStyle(1, 0x00FF00);
      this.hitboxVisual.drawEllipse(0, 0, Config.PLAYER.HITBOX_WIDTH / 2, Config.PLAYER.HITBOX_HEIGHT / 2);
      this.hitboxVisual.endFill();
      this.sprite.addChild(this.hitboxVisual);
      this.hitboxVisual.visible = Config.DEBUG.SHOW_PLAYER_HITBOX;
      this.movement = {
        up: false,
        down: false,
        left: false,
        right: false
      };

      // Combat module
      this.combat = new Combat(this, game);
      this.setupControls();
    }
    return _createClass(Player, [{
      key: "updateWeaponStats",
      value: function updateWeaponStats() {
        var weapon = this.inventory.getEquippedItem();
        if (weapon) {
          this.attackDamage = weapon.damage || Config.PLAYER.ATTACK_DAMAGE;
          this.attackRange = weapon.range || Config.PLAYER.ATTACK_RANGE;
          this.attackCooldown = weapon.cooldown || Config.PLAYER.ATTACK_COOLDOWN;
          this.attackArc = weapon.arc || Math.PI / 2;
          this.attackSwingTime = weapon.swingTime || 120;
        } else {
          // Default to bare hands if nothing equipped
          this.attackDamage = 1;
          this.attackRange = 1;
          this.attackCooldown = 200;
          this.attackArc = Math.PI / 2;
          this.attackSwingTime = 120;
        }
      }
    }, {
      key: "quickAttack",
      value: function quickAttack() {
        this.combat.quickAttack();
      }
    }, {
      key: "pokeAttack",
      value: function pokeAttack() {
        this.combat.pokeAttack();
      }
    }, {
      key: "heavyAttack",
      value: function heavyAttack() {
        this.combat.heavyAttack();
      }

      // Quick-fire helper (full-power arrow)
    }, {
      key: "shoot",
      value: function shoot() {
        var weapon = this.inventory.getEquippedItem();
        if (!weapon) return;
        if (weapon.type === 'ranged') {
          // Force an instant max-power release
          this.combat.releaseCharge(1);
        } else {
          this.combat.attack('SHOOT');
        }
      }
    }, {
      key: "setupControls",
      value: function setupControls() {
        var _this = this;
        // Movement + attack hotkeys
        window.addEventListener('keydown', function (e) {
          return _this.handleKeyDown(e);
        });
        window.addEventListener('keyup', function (e) {
          return _this.handleKeyUp(e);
        });
        window.addEventListener('keypress', function (e) {
          if (e.key === ' ') _this.combat.attack('NORMAL');
        });
        window.addEventListener('keydown', function (e) {
          if (e.key === 'q') _this.quickAttack();
          if (e.key === 'e') _this.heavyAttack();
          if (e.key === 'f') _this.pokeAttack();
        });
        window.addEventListener('keydown', function (e) {
          // Number keys 1-9 and 0 (for slot 10)
          if (e.key >= '1' && e.key <= '9') {
            var slot = parseInt(e.key) - 1;
            _this.equipFromSlot(slot);
          } else if (e.key === '0') {
            _this.equipFromSlot(9); // Slot 10
          }
        });
        var view = this.game.app.view;
        view.addEventListener('pointermove', function (e) {
          return _this._onPointerMove(e);
        });

        // Prevent default context menu for right-click quick-shot
        view.addEventListener('contextmenu', function (e) {
          return e.preventDefault();
        });

        // pointerdown: start charge for ranged, otherwise normal attack
        view.addEventListener('pointerdown', function (e) {
          var weapon = _this.inventory.getEquippedItem();
          if (e.button === 0) {
            // Left mouse: hold to charge bow OR normal swing
            if (weapon && weapon.type === 'ranged') {
              _this.combat.startCharge(); // begin drawing bow
            } else {
              _this.combat.attack('NORMAL');
            }
          } else if (e.button === 2) {
            // Right mouse: instant quick-shot OR heavy
            if (weapon && weapon.type === 'ranged') {
              _this.combat.startCharge(true); // immediate full-power fire
            } else {
              _this.heavyAttack();
            }
          }
        });

        // pointerup: release and fire charged arrow
        var releaseIfRanged = function releaseIfRanged(e) {
          if (e.button !== 0) return;
          var weapon = _this.inventory.getEquippedItem();
          if (weapon && weapon.type === 'ranged') {
            _this.combat.releaseCharge(); // compute power from hold time
          }
        };
        view.addEventListener('pointerup', releaseIfRanged);
        // Safety: also catch releases that happen off-canvas
        window.addEventListener('pointerup', releaseIfRanged);
        window.addEventListener('blur', function () {
          // If the window loses focus mid-draw, cancel by releasing with tiny power
          _this.combat.releaseCharge(0);
        });
      }
    }, {
      key: "equipFromSlot",
      value: function equipFromSlot(slot) {
        var items = this.inventory.getInventory();
        if (slot < items.length) {
          this.inventory.equipItem(items[slot].id);
        }
      }
    }, {
      key: "_onPointerMove",
      value: function _onPointerMove(e) {
        var rect = this.game.app.view.getBoundingClientRect();
        var mouseX = e.clientX - rect.left;
        var mouseY = e.clientY - rect.top;
        var cx = this.game.app.screen.width / 2;
        var cy = this.game.app.screen.height / 2 + Config.CAMERA.OFFSET_Y;
        this.mouseScreen.x = mouseX - cx;
        this.mouseScreen.y = mouseY - cy;
        this._recomputeFacing();
      }
    }, {
      key: "_recomputeFacing",
      value: function _recomputeFacing() {
        var W = Config.TILE.WIDTH;
        var H = Config.TILE.HEIGHT;
        var sx = this.mouseScreen.x;
        var sy = this.mouseScreen.y;
        var dx = sx / W + sy / H;
        var dz = -sx / W + sy / H;
        var len = Math.hypot(dx, dz) || 1;
        this.facing.x = dx / len;
        this.facing.z = dz / len;
      }
    }, {
      key: "handleKeyDown",
      value: function handleKeyDown(e) {
        switch (e.key) {
          case 'w':
          case 'ArrowUp':
            this.movement.up = true;
            break;
          case 's':
          case 'ArrowDown':
            this.movement.down = true;
            break;
          case 'a':
          case 'ArrowLeft':
            this.movement.left = true;
            break;
          case 'd':
          case 'ArrowRight':
            this.movement.right = true;
            break;
        }
      }
    }, {
      key: "handleKeyUp",
      value: function handleKeyUp(e) {
        switch (e.key) {
          case 'w':
          case 'ArrowUp':
            this.movement.up = false;
            break;
          case 's':
          case 'ArrowDown':
            this.movement.down = false;
            break;
          case 'a':
          case 'ArrowLeft':
            this.movement.left = false;
            break;
          case 'd':
          case 'ArrowRight':
            this.movement.right = false;
            break;
        }
      }
    }, {
      key: "update",
      value: function update(delta) {
        var speed = Config.PLAYER.SPEED;
        var screenDx = 0,
          screenDz = 0;
        if (this.movement.right) screenDz -= 1;
        if (this.movement.left) screenDz += 1;
        if (this.movement.down) screenDx += 1;
        if (this.movement.up) screenDx -= 1;
        if (screenDx !== 0 && screenDz !== 0) {
          var length = Math.hypot(screenDx, screenDz);
          screenDx /= length;
          screenDz /= length;
        }
        var worldDx = (screenDx - screenDz) * speed;
        var worldDz = (screenDx + screenDz) * speed;
        this.x += worldDx;
        this.z += worldDz;

        // Delegate combat updates (swing fade, timers)
        this.combat.update(delta);
      }
    }]);
  }();

  // inventoryUI.js
  var InventoryUI = /*#__PURE__*/function () {
    function InventoryUI(game) {
      var _this = this;
      _classCallCheck(this, InventoryUI);
      this.game = game;
      this.container = new PIXI.Container();
      this.slotSize = 64;
      this.padding = 5;
      this.slots = [];
      this.createUI();
      game.app.stage.addChild(this.container);

      // Listen for equipment changes from inventory
      game.player.inventory.onEquipmentChange(function () {
        return _this.updateUI();
      });
    }
    return _createClass(InventoryUI, [{
      key: "createUI",
      value: function createUI() {
        var _this2 = this;
        var inventory = this.game.player.inventory;
        var slotsCount = inventory.maxSlots;

        // Background
        var bg = new PIXI.Graphics();
        bg.beginFill(0x333333, 0.8);
        bg.drawRoundedRect(0, 0, (this.slotSize + this.padding) * slotsCount + this.padding, this.slotSize + this.padding * 2, 5);
        bg.endFill();
        this.container.addChild(bg);

        // Position at bottom center
        this.container.x = (this.game.app.screen.width - this.container.width) / 2;
        this.container.y = this.game.app.screen.height - this.container.height - 20;

        // Create slots
        var _loop = function _loop(i) {
          var slot = new PIXI.Graphics();
          slot.beginFill(0x555555);
          slot.lineStyle(2, 0x888888);
          slot.drawRoundedRect(_this2.padding + i * (_this2.slotSize + _this2.padding), _this2.padding, _this2.slotSize, _this2.slotSize, 3);
          slot.endFill();
          slot.interactive = true;
          slot.buttonMode = true;
          slot.on('pointerdown', function () {
            return _this2.onSlotClick(i);
          });
          _this2.container.addChild(slot);
          _this2.slots.push({
            bg: slot,
            icon: null,
            index: i
          });
        };
        for (var i = 0; i < slotsCount; i++) {
          _loop(i);
        }
        this.updateUI();
      }
    }, {
      key: "onSlotClick",
      value: function onSlotClick(index) {
        var inventory = this.game.player.inventory;
        var item = inventory.getInventory()[index];
        if (item) {
          // Toggle equipment - inventory.equipItem() now handles toggling
          inventory.equipItem(item.id);
          // UI will update automatically via the event listener
        }
      }
    }, {
      key: "updateUI",
      value: function updateUI() {
        var inventory = this.game.player.inventory;
        var items = inventory.getInventory();
        var equippedItem = inventory.getEquippedItem();

        // Clear all slot icons
        var _iterator = _createForOfIteratorHelper(this.slots),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _slot = _step.value;
            if (_slot.icon) {
              _slot.bg.removeChild(_slot.icon);
              _slot.icon = null;
            }

            // Reset slot appearance
            _slot.bg.clear();
            _slot.bg.beginFill(0x555555);
            _slot.bg.lineStyle(2, 0x888888);
            _slot.bg.drawRoundedRect(this.padding + _slot.index * (this.slotSize + this.padding), this.padding, this.slotSize, this.slotSize, 3);
            _slot.bg.endFill();
          }

          // Update slots with items
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        for (var i = 0; i < items.length; i++) {
          if (i >= this.slots.length) break;
          var item = items[i];
          var slot = this.slots[i];

          // Highlight equipped item (both weapons and ranged items)
          if (equippedItem && equippedItem.id === item.id) {
            slot.bg.clear();
            slot.bg.beginFill(0x777777);
            slot.bg.lineStyle(2, 0xAAAAAA);
            slot.bg.drawRoundedRect(this.padding + slot.index * (this.slotSize + this.padding), this.padding, this.slotSize, this.slotSize, 3);
            slot.bg.endFill();
          }

          // Add item icon (placeholder - you'd use actual textures)
          var icon = new PIXI.Graphics();
          icon.beginFill(0xFFFFFF);
          icon.drawRect(10, 10, this.slotSize - 20, this.slotSize - 20);
          icon.endFill();

          // Position icon in slot
          icon.x = this.padding + i * (this.slotSize + this.padding) + 10;
          icon.y = this.padding + 10;
          this.container.addChild(icon);
          slot.icon = icon;
        }
      }
    }]);
  }();

  var FPSDisplay = /*#__PURE__*/function () {
    function FPSDisplay(game) {
      _classCallCheck(this, FPSDisplay);
      this.game = game;
      this.fps = 0;
      this.frameCount = 0;
      this.lastTime = 0;

      // Create text element
      this.text = new PIXI.Text('FPS: 0', {
        fontFamily: 'Arial',
        fontSize: 16,
        fill: 0x00ff00,
        align: 'right'
      });
      this.text.x = this.game.app.screen.width - 100;
      this.text.y = 10;
      this.text.anchor.set(1, 0);
      this.text.visible = Config.DEBUG.SHOW_FPS;
      this.game.app.stage.addChild(this.text);
    }
    return _createClass(FPSDisplay, [{
      key: "update",
      value: function update() {
        this.text.visible = true;
        this.frameCount++;
        var currentTime = performance.now();
        if (currentTime - this.lastTime >= 1000) {
          this.fps = Math.round(this.frameCount * 1000 / (currentTime - this.lastTime));
          this.text.text = "FPS: ".concat(this.fps);
          this.frameCount = 0;
          this.lastTime = currentTime;

          // Update position in case window was resized
          this.text.x = this.game.app.screen.width - 10;
        }
      }
    }]);
  }();

  var Game = /*#__PURE__*/function () {
    function Game() {
      _classCallCheck(this, Game);
      this.app = new PIXI.Application({
        view: document.getElementById("game-canvas"),
        resizeTo: window,
        backgroundColor: Config.COLORS.BACKGROUND,
        antialias: false,
        resolution: window.devicePixelRatio || 1
      });
      PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
      this.world = new World(this);
      this.renderer = new IsometricRenderer(this.app, this.world, this);
      this.player = new Player(this);
      this.enemies = Array.from(this.world.enemies);

      // Add inventory UI
      this.inventoryUI = new InventoryUI(this);
      this.projectiles = [];
      this.particles = [];
      this.fpsDisplay = new FPSDisplay(this);
      this.setup();
      this.gameLoop();

      // Expose to console for debugging
      window.game = this;
    }
    return _createClass(Game, [{
      key: "setup",
      value: function setup() {
        var _this = this;
        window.addEventListener("resize", function () {
          _this.app.renderer.resize(window.innerWidth, window.innerHeight);
          _this.renderer.updateCamera();
        });
        this.renderer.updateCamera();
        this.renderer.render();
      }

      // game.js
    }, {
      key: "gameLoop",
      value: function gameLoop() {
        var _this2 = this;
        this.app.ticker.add(function (delta) {
          _this2.player.update(delta);

          // Update all enemies
          var _iterator = _createForOfIteratorHelper(_this2.enemies),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var enemy = _step.value;
              enemy.update(delta);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          _this2.world.updateChunks(_this2.player.x, _this2.player.z);
          _this2.renderer.updateCamera();
          _this2.renderer.render();
          _this2.fpsDisplay.update();

          // Update enemies list from world
          _this2.enemies = Array.from(_this2.world.enemies);
          for (var i = _this2.projectiles.length - 1; i >= 0; i--) {
            var p = _this2.projectiles[i];

            // Check if projectile is already marked as destroyed
            if (p.destroyed) {
              _this2.projectiles.splice(i, 1);
              continue;
            }
            var alive = p.update(delta);
            if (!alive) {
              _this2.projectiles.splice(i, 1);
            }
          }
          for (var _i = _this2.particles.length - 1; _i >= 0; _i--) {
            var particle = _this2.particles[_i];
            var _alive = particle.update(delta);
            if (!_alive) {
              _this2.particles.splice(_i, 1);
            }
          }

          // Update grass sway - use performance.now() for time
          var time = performance.now();
          var _iterator2 = _createForOfIteratorHelper(_this2.world.tallGrass),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var grass = _step2.value;
              grass.update(delta, time);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        });
      }
    }]);
  }();

  // Start the game when DOM is loaded
  document.addEventListener("DOMContentLoaded", function () {
    new Game();
  });

  exports.Game = Game;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({});
