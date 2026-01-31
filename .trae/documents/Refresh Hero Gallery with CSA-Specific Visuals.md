# Refresh Hero Gallery with CSA-Specific Visuals

## Visual Selection Strategy:
Update the `heroImages` array in the [Landing Page](file:///c:/Users/kobby/OneDrive/Documentos/GitHub/csa-project-nexus/apps/web/src/app/landing/page.tsx) with a curated sequence that tells the story of modern, resilient farming:
1. **Smart Monitoring**: A farmer using digital tools in the field.
2. **Resilient Growth**: High-detail seedling growth representing new CSA methods.
3. **Precision Irrigation**: Visuals of controlled environment and water management.
4. **Climate Data**: Atmospheric visuals representing weather intelligence.
5. **Community Impact**: Group of farmers collaborating on sustainable practices.
6. **Data Analytics**: A laboratory/analysis visual for "Agricultural Intelligence."

## Technical Implementation:
### Update Gallery Array:
Replace the existing images in [landing/page.tsx:L9-16](file:///c:/Users/kobby/OneDrive/Documentos/GitHub/csa-project-nexus/apps/web/src/app/landing/page.tsx#L9-16) with the following verified Pexels/Unsplash IDs:
- `https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg` (IoT & Smart Monitoring)
- `https://images.pexels.com/photos/1105166/pexels-photo-1105166.jpeg` (Resilient Seedlings)
- `https://images.pexels.com/photos/259280/pexels-photo-259280.jpeg` (Precision Tech)
- `https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg` (Climate Intelligence)
- `https://images.pexels.com/photos/5940841/pexels-photo-5940841.jpeg` (Community Education)
- `https://images.pexels.com/photos/1482101/pexels-photo-1482101.jpeg` (Diversified Harvest)
- `https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg` (Agricultural Research)
- `https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg` (Sustainable Landscape)

### Verification:
- Confirm all images load correctly in the browser without `ERR_BLOCKED_BY_ORB` errors.
- Ensure the seamless **double-buffer cross-fade** transition remains fully operational.
