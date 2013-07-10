/*
Roberto Testa
Matricola Number:465341
Computational Graphics
Object: Breur Longe Chaise
*/

//domain
var domain = DOMAIN([[0,2*PI]])([36]);
var domain2 = PROD1x1([INTERVALS(2*PI)(50), INTERVALS(1)(50)])
var domain1D = INTERVALS(1)(20);
var domain_surface_hermite = PROD1x1([INTERVALS(1)(14),INTERVALS(1)(14)]);

//COLORS
var BLACK = [25/255, 25/255, 25/255];

//++++++support function+++++++++++

//horizontal circle
var horizontalCircle = function (r,h,dx,dy) {
  return function (v) {
    return [r*SIN(v[0])+dx, r*COS(v[0])+dy,h];
  };
};

//horizontal circle
var VerticalCircle = function (r,h,dx,dy) {
  return function (v) {
    return [h,r*SIN(v[0])+dx, r*COS(v[0])+dy];
  };
};

//how to make the Bezier Surface
function MakeBezierSurface(curve){
  var result = null;
  for (var i = 0; i < curve.length; i++) {
      var mappingFunc = BEZIER(S1)(curve[i]);
      var surface = MAP(mappingFunc)(domain2);
      if(result === null)
        result = surface;
      else
        result = STRUCT([result,surface]);
    };
  return result;
}

function knots (controls) {
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

var getSkeleton = function(){
  var controlpointsSkeleton1 = [[0,0,0],[2.1,0,0]];
  var curveMappingSkeleton1 = BEZIER(S0)(controlpointsSkeleton1);
  DRAW(MAP(curveMappingSkeleton1)(domain1D))

  var controlpointsSkeleton2 = [[2.1,0,0],[2.8,0,0.5],[2,0,0],[0.3,0,1]];
  var curveMappingSkeleton2 = CUBIC_HERMITE(S0)(controlpointsSkeleton2);
  var curveSkeleton2 = MAP(curveMappingSkeleton2)(domain1D);
  DRAW(curveSkeleton2)

  var controlpointsSkeleton3 = [[2.8,0,0.5],[2.8+0.7,0,0.5+3.3]];
  var curveMappingSkeleton3 = BEZIER(S0)(controlpointsSkeleton3);
  DRAW(MAP(curveMappingSkeleton3)(domain1D))

  var controlpointsSkeleton4 = [[2.8+0.7,0,0.5+3.3],[2.8+0.3,0,0.5+3.3+0.5],[0.3,0,1],[-1,0,-0.3]];
  var curveMappingSkeleton4 = CUBIC_HERMITE(S0)(controlpointsSkeleton4);
  var curveSkeleton4 = MAP(curveMappingSkeleton4)(domain1D);
  DRAW(curveSkeleton4)

  var controlpointsSkeleton5 = [[2.8+0.3,0,0.5+3.3+0.5],[0.8,0,0.5+3.3+0.5-0.6]];
  var curveMappingSkeleton5 = BEZIER(S0)(controlpointsSkeleton5);
  DRAW(MAP(curveMappingSkeleton5)(domain1D))

  var Skeleton = STRUCT([]);
  return Skeleton;
}

var Skeleton = getSkeleton();

var getBreurChaiseLongue =function(){
  var BreurChaiseLongue =STRUCT([Skeleton])
  return BreurChaiseLongue;
}

var BreurChaiseLongue = getBreurChaiseLongue();
DRAW(BreurChaiseLongue);