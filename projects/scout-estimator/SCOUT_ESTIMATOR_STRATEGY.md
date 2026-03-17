# SCOUT_ESTIMATOR_BLUEPRINT.md - Engineering Strategy

## 1. Goal
Replicate the core value proposition of high-velocity construction estimating: **"Automated Blueprint-to-Quantity"** for GCs and Trades.

## 2. Technical Stack (The "Scout Estimator" MVP)
- **Vision Layer**: GPT-4o (Vision) or Gemini 2.0 Flash (Vision) for spatial reasoning and object detection on floor plans.
- **Processing Engine**: Python (OpenCV for basic image pre-processing, PDFPlumber for text/vector extraction).
- **Frontend**: Next.js (DEX App expansion) to provide a drag-and-drop interface for blueprints.
- **Output**: JSON data mapped to a "Proposal Generator" template.

## 3. The "Scout Estimator" Logic Workflow
1. **Scale Detection**: Extract the scale from the blueprint legend (OCR).
2. **Segmentation**: AI identifies room boundaries, wall types, and fixture symbols.
3. **Calculation**: 
   - Area = (Pixel Count of Segment) * (Scale Factor).
   - Linear = (Pixel Length of Lines) * (Scale Factor).
4. **Proposal Mapping**: Quantities multiplied by `globals/MATERIAL_RATES.md` (to be created).

## 4. MVP Features
- [ ] **PDF/PNG Upload**: Basic intake.
- [ ] **Automatic Wall Count**: Linear footage of drywalls/studs.
- [ ] **Square Footage Mapping**: Flooring/Paint area extraction.
- [ ] **Fixture Counting**: Automated count of doors, sinks, and outlets.

## 5. Next Steps
- **DEX Specialist**: Scaffold the `scout-estimator/` directory and test a basic GPT-4o Vision prompt with a sample floor plan.
- **Webmaster**: Update the `CONSTRUCTION_LANDING_PAGE.md` to feature "Powered by Scout Estimator" messaging.
