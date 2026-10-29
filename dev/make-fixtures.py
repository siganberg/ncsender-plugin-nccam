# Builds the test STEP files: freecadcmd dev/make-fixtures.py
import os, Part, FreeCAD as App
V = App.Vector
out = os.path.join(os.getcwd(), "tests", "fixtures")

def rounded_box(x, y, w, h, depth, z, r):
    b = Part.makeBox(w, h, depth, V(x, y, z))
    return b.makeFillet(r, [e for e in b.Edges if abs(e.Vertexes[0].Point.z - e.Vertexes[1].Point.z) > 1e-6]) if r > 0 else b

# 1. Bracket: pocket with 1.6 mm corners, two through holes
part = Part.makeBox(120, 80, 18)
part = part.cut(rounded_box(20, 20, 50, 40, 8.001, 10, 1.6))
for cx, cy in ((95, 25), (95, 55)):
    part = part.cut(Part.makeCylinder(5, 20, V(cx, cy, -1)))
part.exportStep(os.path.join(out, "bracket.step"))

# 2. Stepped block: outside shoulder, pocket with an island, blind hole
part = Part.makeBox(100, 60, 20)
part = part.cut(Part.makeBox(30, 62, 10.001, V(70, -1, 10)))
part = part.cut(rounded_box(10, 10, 50, 40, 6.001, 14, 4))
part = part.fuse(Part.makeCylinder(6, 6, V(35, 30, 14))).removeSplitter()
part = part.cut(Part.makeCylinder(4, 6.001, V(85, 30, 4)))
part.exportStep(os.path.join(out, "stepped.step"))

# 3. Chamfered edge: a sloped face ncCAM can't cut as 2.5D
part = Part.makeBox(60, 40, 12)
top = [e for e in part.Edges if all(abs(v.Point.z - 12) < 1e-6 for v in e.Vertexes)]
part = part.makeChamfer(2, top)
part.exportStep(os.path.join(out, "chamfered.step"))
# 4. Plate: slots and holes all the way through (top or bottom up only)
part = Part.makeBox(180, 100, 5)
for i in range(5):
    slot = Part.makeBox(60, 8, 7, V(40, 14 + i * 16, -1))
    part = part.cut(slot.makeFillet(3.99, [e for e in slot.Edges if abs(e.Vertexes[0].Point.z - e.Vertexes[1].Point.z) > 1e-6]))
for cx, cy in ((8, 8), (172, 8), (8, 92), (172, 92)):
    part = part.cut(Part.makeCylinder(3.1, 7, V(cx, cy, -1)))
part.exportStep(os.path.join(out, "plate.step"))
print("ok")
