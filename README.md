# Kinematica — robotics math, made visible

An interactive, zero-to-hero robotics tutorial — from the linear algebra foundations all the way to localization and SLAM. Twenty-two linked modules that build on each other, following *Introduction to Autonomous Robots* (Correll, Hayes, Heckman & Roncone):

**Foundations — the math** (Appendix B, Ch. 2.4)

1. **Vectors** — add, subtract, scale (3D)
2. **Dot Product** — projection, angle, sign; how rotation-matrix entries are dot products
3. **Cross Product** — perpendicular vector, parallelogram area, right-hand rule
4. **Frames & Transforms** — rotate + translate a frame, live 4×4 homogeneous matrix with proper ${}^{A}_{B}T$ notation
5. **Rotations** — Euler angles, gimbal lock, and quaternions (the same pose, two ways)
6. **Matrices as Maps** — drag the basis arrows to bend space; determinant as area scaling and rank as the dimension the map fills
7. **Eigenvectors** — the directions a matrix leaves on their own line (geometric, after 3Blue1Brown's *Essence of Linear Algebra* Ch. 14)
8. **Lagrange Multipliers** — constrained optimization: drag a target and watch ∇f line up with ∇g (λ) on the constraint
9. **Line Fitting (TLS)** — total-least-squares: fit a line through noisy points via the scatter matrix's smallest eigenvector, the SVD/PCA payoff
10. **Singular Value Decomposition** — every matrix as rotate → stretch → rotate (A = UΣVᵀ); singular values, condition number, and the inverse / pseudo-inverse unified

**Manipulator kinematics** (Ch. 3–4)

11. **Forward Kinematics** — turn the joints of a 3-link arm; watch the frames stack to a tip pose
12. **DH Parameters** — a 3D arm built from a live Denavit–Hartenberg table (α, a, d, θ)
13. **URDF** — the XML that describes a robot for ROS/RViz/Gazebo: links, joints, origin, axis and limits, with live-generated URDF for fixed / revolute / continuous / prismatic joints
14. **Inverse Kinematics** — drag a target; solve a 2-link arm's elbow-up / elbow-down angles
15. **Workspace** — the reachable cloud of an arm, and how joint limits carve it down
16. **Singularities** — a 2-link arm whose Jacobian, manipulability ellipse and measure tie everything together

**Mobile robots & motion** (Ch. 3.3–3.4)

17. **Differential Drive** — wheel speeds → body velocity → integrated pose (odometry)
18. **Mobile Inverse Kinematics** — drive-to-goal control; wheel speeds from a body velocity, and the non-holonomic constraint
19. **Motion Profiles** — trapezoidal vs cubic trajectories: how a joint actually moves over time

**Localization** (Ch. 16)

20. **Markov Localization** — a 1D grid (Bayes) filter: perception sharpens, action spreads, doors disambiguate
21. **Particle Filter** — a 2D swarm localizing against landmarks by predict / weight / resample

**SLAM** (Ch. 17)

22. **SLAM (Loop Closure)** — odometry drifts as the robot laps a loop; revisiting a known place closes the loop and the pose-graph correction snaps both the path and the mapped landmarks back onto truth

The same file, `kinematica.html`, powers both options below.

---

## Option 1 — Web / portable (zero setup)

Just open `kinematica.html` in any modern browser (Chrome, Edge, Firefox, Safari). Double-click it, or drag it onto a browser window. Nothing to install. It works offline; an internet connection only improves the fonts (it falls back to system fonts cleanly when offline).

## Option 2 — Native desktop app (Electron)

Gives you a real application window with its own icon, fullscreen, and zoom.

**Requirements:** [Node.js](https://nodejs.org) 18 or newer (includes `npm`).

**Run it:**

```bash
cd kinematica
npm install
npm start
```

**Build an installer for your platform** (output lands in `dist/`):

```bash
npm run dist          # builds for the OS you're currently on
# or target one explicitly:
npm run dist:win      # Windows  -> NSIS installer (.exe)
npm run dist:mac      # macOS    -> .dmg
npm run dist:linux    # Linux    -> AppImage
```

Notes:
- You generally can only build a macOS `.dmg` on a Mac and a Windows installer on Windows (cross-building is possible but needs extra tooling).
- The first `npm install` downloads Electron (~100 MB), so it needs an internet connection once.
- No custom icon is bundled; electron-builder will use a default. To brand it, add an `icon` field under `build` pointing to a `.ico` (Windows) / `.icns` (macOS) / `.png` (Linux).

---

## Controls

- **3D modules** (Vectors, Dot, Cross, Frames, Rotations, DH Parameters): drag the viewport to orbit; sliders set components, angles, and joints.
- **2D modules** (Matrices, Eigenvectors, Forward/Inverse Kinematics, URDF, Workspace, Singularities, Differential Drive, Mobile IK, Motion Profiles, Markov Localization, Particle Filter): drag the arrows, handles, IK target, or mobile-robot goal directly; sliders, presets, step buttons and play/auto toggles are available where relevant.
- Every module has a **Live Math** panel that updates in real time and a colored verdict explaining the current state.
- Reduced-motion is respected: auto-animations default to off if your system requests it.

## License

MIT — use, modify, and share freely.
