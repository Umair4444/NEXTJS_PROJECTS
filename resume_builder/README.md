# Resume Builder

A modern, professional resume builder application that helps you create ATS-friendly resumes with multiple templates and export options.

## Features

### 🎨 Professional Templates

- **Modern Template**: Contemporary design with gradient headers and color-coded sections
- **Classic Template**: Traditional serif font with centered headers for timeless appeal
- **Minimal Template**: Clean, contemporary design with subtle typography

### 📝 Comprehensive Form Sections

- **Personal Information**: Name, contact details, professional summary
- **Work Experience**: Job titles, companies, dates, and detailed descriptions
- **Education**: Degrees, institutions, graduation dates, and relevant coursework
- **Skills**: Technical and soft skills with organized categorization

### 📄 Multiple Export Formats

- **PDF Export**: High-quality PDF generation for professional sharing
- **JPG Export**: Image format for quick previews and social sharing
- **Word Export**: Editable .docx format for further customization

### ✨ User Experience Features

- Real-time preview as you type
- Smooth animations and micro-interactions
- Responsive design for all devices
- Form validation and helpful hints
- Template switching with instant preview updates
- Loading states and progress feedback

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: shadcn/ui component library
- **Typography**: Geist Sans and Geist Mono fonts
- **Export Libraries**:
  - `html2canvas` - For screenshot generation
  - `jspdf` - For PDF creation
  - `docx` - For Word document generation

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone <repository-url>
   cd resume-builder
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install

# or

yarn install
\`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev

# or

yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage Guide

### 1. Fill Out Your Information

- Navigate through the tabs (Personal Info, Experience, Education, Skills)
- Fill out each section with your relevant information
- Use the helpful hints and validation messages to ensure completeness

### 2. Choose Your Template

- Select from Modern, Classic, or Minimal templates
- Preview updates in real-time as you switch templates
- Each template is optimized for ATS (Applicant Tracking System) compatibility

### 3. Export Your Resume

- Click the "Generate" button to prepare your resume
- Choose your preferred export format:
  - **PDF**: Best for job applications and professional sharing
  - **JPG**: Great for quick previews and social media
  - **Word**: Allows for further editing and customization

## ATS Optimization

All templates are designed with ATS compatibility in mind:

- Clean, semantic HTML structure
- Standard fonts and readable typography
- Proper heading hierarchy
- No complex graphics or unusual formatting
- Standard section names and organization

## Customization

### Adding New Templates

1. Create a new template component in `components/resume-preview.tsx`
2. Add the template option to the template selector
3. Implement the template's unique styling and layout

### Modifying Form Fields

1. Update the respective form components in the `components/` directory
2. Ensure the resume data interface is updated accordingly
3. Update all template components to handle new fields

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

If you encounter any issues or have questions:

1. Check the existing issues on GitHub
2. Create a new issue with detailed information
3. Include browser version and steps to reproduce
