function nodi (controls) {
  var len = controls.length+3;
  var knots = [];
  knots[0] = 0;
  knots[1] = 0;
  knots[2] = 0;
  for (var i = 3; i <= len-4; i++) {
    knots[i] = i-2;
  };
  knots[len-1] = len-5;
  knots[len-2] = len-5;
  knots[len-3] = len-5;
  return knots;
};

Dom1D = INTERVALS(1)(24)
var domain = PROD1x1([INTERVALS(1)(14),INTERVALS(1)(14)]);

var P0 = [[0,-0.15,0],[0,-0.15,0.15],[0,0.15,0.15],[0,0.15,0]]
var polyline0 = POLYLINE(P0);
DRAW(polyline0)

var knots1 = nodi(P0);
var c1 = NUBS(S0)(2)(knots1)(P0)

var p1 = MAP(c1)(Dom1D)
DRAW(p1)

var P1 = [[0.7,-0.15,0],[0.7,-0.15,0.15],[1,0.15,0.15],[1,0.15,0]]
var polyline1 = POLYLINE(P1);
DRAW(polyline1);
var knots2 = nodi(P1);
var c2 = NUBS(S0)(2)(knots2)(P1)
var p2 = MAP(c2)(Dom1D)
DRAW(p2)

var sup1= MAP(BEZIER(S1)([c1,c2]))(domain)
DRAW(sup1)

var P3 = [[0,-0.15,0],[0,-0.15,-0.15],[0,0.15,-0.15],[0,0.15,0]]
var polyline3 = POLYLINE(P3);
DRAW(polyline3)

var knots3 = nodi(P3);
var c3 = NUBS(S0)(2)(knots3)(P3)
var p3 = MAP(c3)(Dom1D)
DRAW(p3)

var P4 = [[0.7,-0.15,0],[0.7,-0.15,-0.15],[1,0.15,-0.15],[1,0.15,0]]
var polyline4 = POLYLINE(P4);
DRAW(polyline4);
var knots4 = nodi(P4);
var c4 = NUBS(S0)(2)(knots4)(P4)
var p4 = MAP(c4)(Dom1D)
DRAW(p4)

var sup2= MAP(BEZIER(S1)([c3,c4]))(domain)
DRAW(sup2)

