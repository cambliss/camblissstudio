import Link from "next/link";
import React from "react";

const QualityControl = () => {
  return (
    <section className="terms_conditions_section section_space_lg pt-120 pb-60">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <ul
              className="nav tabs_nav_boxed unordered_list_block mb-60"
              role="tablist"
            >
              <li role="presentation">
                <button
                  data-bs-toggle="tab"
                  data-bs-target="#tab_privacy_policy"
                  type="button"
                  role="tab"
                  aria-selected="false"
                >
                  <i className="fas fa-circle"></i>

                  <span>Media</span>
                </button>
              </li>
              <li role="presentation">
                <button
                  className="active"
                  data-bs-toggle="tab"
                  data-bs-target="#tab_terms_conditions"
                  type="button"
                  role="tab"
                  aria-selected="true"
                >
                  <i className="fas fa-circle"></i>
                  <span>Website</span>
                </button>
              </li>
            </ul>
          </div>
          <div className="col-lg-9">
            <div className="tab-content mb-60">
              <div
                className="tab-pane fade"
                id="tab_privacy_policy"
                role="tabpanel"
              >
                <div className="terms_conditions_content">
                  {/* <h3 className="warpper_title">Cambliss Studio Quality Control (QC) Requirements for Shooting or Editing</h3> */}
                  {/* <p>
                    Companies or websites that handle customer information are
                    required by law and third parties to publish their Privacy
                    Policies on their business websites. If you own a website,
                    web app, mobile app or that collects or processes user data,
                    you most certainly will have to post a Privacy Policy on
                    your website (or give in-app access to the full Privacy
                    Policy agreement).
                  </p> */}
                 <h3 className="warpper_title">
                    Cambliss Studio Quality Control (QC) Requirements for
                    Shooting or Editing .
                  </h3>
                  <ul className="icon_list unordered_list_block">
                    <li>
                      <span className="list_item_icon">
                        <i className="fas fa-circle"></i>
                      </span>
                      <span className="list_item_text">
                        <strong className="faime_list_item">
                          {" "}
                          1. Video Quality and Resolution{" "}
                        </strong>
                        <br /><br />
                        <h4 className="info_title">Resolution:</h4>
                        <p> Capture in at least 4K (UHD) resolution,
                        maintaining a 16:9 aspect ratio or platform-specified
                        ratios. </p>
                        <h4 className="info_title">Frame Rate:</h4>
                         <p>Utilize a consistent cinematic frame
                        rate (24 fps preferred), with no fluctuations across
                        scenes.</p>
                        <h4 className="info_title">Color Profile:</h4>
                        <p>Use a standard color
                        profile, such as Rec.709 or Rec.2020 for HDR. Apply
                        color grading and correction for uniform visual quality
                        across the entire project.</p> 
                        <h4 className="info_title"> Lighting and Exposure: </h4>
                     <p>  Ensure
                        all scenes are well-lit without overexposure or
                        underexposure, except for intentional artistic choices.
                        Maintain a high dynamic range, avoiding crushed blacks
                        and blown-out highlights.</p>
                        <h4 className="info_title">  Stabilization: </h4>

                         Stabilize
                        footage with equipment unless intentional handheld
                        shakiness is desired for effect.
                      </span>
                    </li>
                    <li>
                      <span className="list_item_icon">
                        <i className="fas fa-circle"></i>
                      </span>
                      <span className="list_item_text">
                        <strong className="faime_list_item">
                          {" "}
                          2. Audio Quality and Clarity
                        </strong>
                        <br /><br />
                        <h4 className="info_title">Sample Rate:</h4>

                      <p>Record audio at a minimum of 48kHz, 24-bit
                        depth, ensuring high fidelity.</p> 
                        <h4 className="info_title">Mix Levels: </h4>

                    <p>  Maintain
                        consistent audio levels, meeting platform-specific
                        loudness (e.g., -24 LKFS for streaming). </p>
                        <h4 className="info_title"> Dialog Clarity:</h4>

                      
                        <p> Ensure clarity in dialogue, free of background
                        interference; use ADR when on-location sound is
                        insufficient. </p>
                        <h4 className="info_title">Multi-Language Requirements:</h4>
                        <p> For
                        international release, provide high-quality dubbed audio
                        and synchronized subtitles. </p>
                        <h4 className="info_title"> Sound Design: </h4>

                       <p>Enhance
                        narrative with sound effects, balancing ambient sounds
                        to support dialogue and score.</p>
                      </span>
                    </li>

                    <li>
                      <span className="list_item_icon">
                        <i className="fas fa-circle"></i>
                      </span>
                      <span className="list_item_text">
                        <strong className="faime_list_item">
                          {" "}
                          3. Post-Production Standards{" "}
                        </strong>
                        <br /><br />
                        <h4 className="info_title">Editing and Transitions:  </h4>
                        <p>Ensure smooth transitions with
                        no abrupt cuts unless creatively intentional, following
                        the visual storytelling style. </p>
                        <h4 className="info_title">  VFX and CGI: </h4>
                      
                        <p> Ensure
                        high-quality rendering for realism, avoiding pixelation
                        or unnatural edges. </p>
                        <h4 className="info_title"> Color Grading: </h4>
                        <p>Apply professional
                        color correction to achieve continuity and mood.</p>
                        <h4 className="info_title"> Closed
                       Captions & Subtitles: </h4>
                      
                       <p>Provide accurate captions for
                        accessibility and precise subtitles that match spoken
                        language, formatted per platform requirements.</p>
                      </span>
                    </li>
                    <li>
                      <span className="list_item_icon">
                        <i className="fas fa-circle"></i>
                      </span>
                      <span className="list_item_text">
                        <strong className="faime_list_item">
                          4. Compliance and Platform-Specific Guidelines
                        </strong>
                        <br /><br />
                        <h4 className="info_title"> File Delivery Format:</h4>
                       <p> Deliver in required formats (e.g.,
                        MXF, ProRes). </p>
                        <h4 className="info_title">Legal Clearances:</h4>
                        <p> Ensure global streaming
                        rights for all media, including music and identifiable
                        objects, with documentation provided.</p>
                        <h4 className="info_title">Safety and
                        Consent:</h4>
                        <p> Document cast and crew safety protocols,
                        including COVID-19 compliance, and secure necessary
                        consent and location releases. </p>
                        <h4 className="info_title">Metadata and Packaging:</h4>
                       <p> 
                        Provide metadata, episode titles, descriptions, and
                        credits. Properly tag content for searchability.{" "}</p>
                      </span>
                    </li>
                    <li>
                      <span className="list_item_icon">
                        <i className="fas fa-circle"></i>
                      </span>
                      <span className="list_item_text">
                        <strong className="faime_list_item">
                          {" "}
                          5. Testing and Review Process
                        </strong>
                        <br /><br />
                        <h4 className="info_title"> Internal Reviews: </h4>
                      <p>Conduct technical and creative reviews
                        across teams before episode finalization.</p> 
                        <h4 className="info_title"> Platform
                        Testing:</h4>
                        <p>  Test episodes on multiple devices to ensure
                        quality consistency.</p> 
                        <h4 className="info_title">   Quality Checklists: </h4>
                        <p>   Complete a
                        comprehensive quality checklist for each episode,
                        covering all standards.</p> 
                        <h4 className="info_title">  Third-Party Quality Control:</h4>
                      
                        <p>  Perform independent audits if required to ensure full
                        compliance."{" "}</p> 
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="tab-pane fade show active"
                id="tab_terms_conditions"
                role="tabpanel"
              >
                <div className="terms_conditions_content">
                  <h3 className="warpper_title">
Cambliss Studio Quality Control (QC) Requirements for Website Creation
                  </h3>
                  <p>
                    To ensure every website we create meets top-tier standards, Cambliss Studio follows these Quality Control (QC) protocols across design, functionality, accessibility, security, and performance. Adhering to these standards guarantees a seamless, responsive, and secure user experience aligned with client expectations and industry best practices.

                  </p>
 <ul className="icon_list unordered_list_block">
                    <li>
                      <span className="list_item_icon">
                        <i className="fas fa-circle"></i>
                      </span>
                      <span className="list_item_text">
                        <strong className="faime_list_item">
                          {" "}
                         1. Design and Visual Quality{" "}    
                        </strong>
                        <br /><br />
                        <h4 className="info_title">Consistency:</h4>
                        <p>Ensure uniformity in fonts, colors, and design elements across all pages.
</p>
                        <h4 className="info_title">Responsive Design: </h4>
                         <p>Test across multiple devices (desktops, tablets, and smartphones) to confirm the layout and functionality adapt smoothly to various screen sizes.
</p>
                        <h4 className="info_title">Color Profile:</h4>
                        <p>Use optimized, high-resolution images that load quickly without sacrificing visual clarity.
</p> 
                        <h4 className="info_title">User Interface (UI) Standards:</h4>
                     <p>   Ensure the interface is intuitive and consistent, with clear navigation paths and visible call-to-action (CTA) elements.
</p>
                        <h4 className="info_title"> Brand Alignment:  </h4>
Confirm that the design aligns with the brand’s visual identity, using approved colors, logos, and styling elements.

                      </span>
                    </li>
                    <li>
                      <span className="list_item_icon">
                        <i className="fas fa-circle"></i>
                      </span>
                      <span className="list_item_text">
                        <strong className="faime_list_item">
                          {" "}
                          2. Functionality and Usability
                        </strong>
                        <br /><br />
                        <h4 className="info_title">Link Validation: </h4>

                      <p>Ensure all internal and external links work correctly, with no broken links or redirects.
</p> 
                        <h4 className="info_title">Form Functionality: </h4>

                    <p>Test all form inputs (contact, registration, etc.) for accuracy, error handling, and correct data submissions.
 </p>
                        <h4 className="info_title"> Navigation: </h4>

                      
                        <p>Confirm smooth, logical, and user-friendly navigation across all pages, with a clear menu structure.
 </p>
                        <h4 className="info_title">Compatibility: </h4>
                        <p>Test across popular browsers (Chrome, Firefox, Safari, Edge) to ensure consistent performance and appearance.
</p>
                        <h4 className="info_title">Interactive Elements: </h4>

                       <p>Validate the functionality of all interactive elements, including buttons, sliders, drop-downs, and carousels, ensuring they respond accurately.
</p>
                      </span>
                    </li>

                    <li>
                      <span className="list_item_icon">
                        <i className="fas fa-circle"></i>
                      </span>
                      <span className="list_item_text">
                        <strong className="faime_list_item">
                          {" "}
                          3. Performance and Load Speed{" "}
                        </strong>
                        <br /><br />

                        <h4 className="info_title">Page Load Time: </h4>
                        <p>Optimize images, scripts, and resources to meet a maximum load time of 3 seconds on standard connections.
 </p>
                        <h4 className="info_title">Code Optimization: </h4>
                      
                        <p>Minimize CSS, HTML, and JavaScript files to reduce load times without compromising functionality.
</p>
                        <h4 className="info_title">Caching: </h4>
                        <p>Implement browser caching and CDN integration where applicable to enhance performance.
</p>
                        <h4 className="info_title">Mobile Optimization:  </h4>
                      
                       <p>Test load times and responsiveness on mobile networks (3G, 4G, 5G) to ensure acceptable performance on all devices.
</p>
                      </span>
                    </li>
                    <li>
                      <span className="list_item_icon">
                        <i className="fas fa-circle"></i>
                      </span>
                      <span className="list_item_text">
                        <strong className="faime_list_item">
                          4. Accessibility Standards
                        </strong>
                        <br /><br />
                        <h4 className="info_title"> WCAG Compliance: </h4>
                       <p>Adhere to Web Content Accessibility Guidelines (WCAG) 2.1 for an inclusive design, including proper alt text for images, descriptive link text, and keyboard navigation support.
 </p>
                        <h4 className="info_title">Color Contrast:</h4>
                        <p> Ensure sufficient contrast between text and background colors for readability, meeting accessibility standards.
</p>
                        <h4 className="info_title"> Screen Reader Compatibility: </h4>
                        <p>Confirm the website is compatible with screen readers, providing accurate labeling and ARIA (Accessible Rich Internet Applications) tags for improved usability.
</p>
                        <h4 className="info_title">Alt Text and Descriptions: </h4>
                       <p> 
                       Provide alt text for all images, graphics, and non-text content to aid users with visual impairments.
</p>
                      </span>
                    </li>
                    <li>
                      <span className="list_item_icon">
                        <i className="fas fa-circle"></i>
                      </span>
                      <span className="list_item_text">
                        <strong className="faime_list_item">
                          {" "}
                         5. Security and Data Protection
                        </strong>
                        <br /><br />
                        <h4 className="info_title">SSL Encryption: </h4>
                      <p>Ensure SSL certificates are correctly installed and configured for secure data transmission.
</p> 
                        <h4 className="info_title">Secure Form Handling: </h4>
                        <p>Protect all user-submitted data through encryption and secure form handling practices.
</p> 
                        <h4 className="info_title">Regular Vulnerability Scans: </h4>
                        <p>Conduct vulnerability testing to identify and fix potential security risks.
</p> 
                        <h4 className="info_title"> Data Privacy Compliance:</h4>
                      
                        <p> Ensure the website complies with data protection regulations, including GDPR and CCPA, with a clearly visible privacy policy.
</p> 
                      </span>
                    </li>
                      <li>
                      <span className="list_item_icon">
                        <i className="fas fa-circle"></i>
                      </span>
                      <span className="list_item_text">
                        <strong className="faime_list_item">
                          {" "}
                       6. SEO and Metadata Optimization
                        </strong>
                        <br /><br />
                        <h4 className="info_title">Metadata: </h4>
                      <p>Include SEO-friendly titles, meta descriptions, and headers (H1, H2, H3) for each page.

</p> 
                        <h4 className="info_title">Keyword Optimization: </h4>
                        <p>Integrate targeted keywords naturally within page content without compromising readability.
</p>
                        <h4 className="info_title">Image SEO:</h4>
                        <p> Optimize all images with descriptive alt text and compress them to improve page speed.

</p> 
                        <h4 className="info_title"> Sitemap & Robots.txt:</h4>
                      
                        <p>Ensure the website includes a current XML sitemap and robots.txt file for search engine indexing.

</p> 
                      </span>
                    </li>
                      <li>
                      <span className="list_item_icon">
                        <i className="fas fa-circle"></i>
                      </span>
                      <span className="list_item_text">
                        <strong className="faime_list_item">
                          {" "}
                        7. Testing and Review Process
                        </strong>
                        <br /><br />
                        <h4 className="info_title">Content Accuracy: </h4>
                      <p>Review all text content for spelling, grammar, and factual accuracy, ensuring alignment with brand tone and messaging.

</p> 
                        <h4 className="info_title">Multi-Device Testing: </h4>
                        <p>Test the website on various devices and screen resolutions for consistency in appearance and functionality.
</p>
                        <h4 className="info_title">User Acceptance Testing (UAT): </h4>
                        <p>Conduct UAT with a sample user group to gather feedback and confirm usability.

</p> 
                        <h4 className="info_title"> Quality Checklist: </h4>
                      
                        <p>Complete a comprehensive quality checklist to verify that all elements meet the QC requirements.

</p> 
   <h4 className="info_title"> Third-Party Audits:</h4>
                      
                        <p> Perform third-party audits as needed for accessibility, security, and SEO compliance.

</p> 
                      </span>
                    </li>
                  </ul>
                  {/* <h4 className="info_title">
                    Here are some of the main reasons:
                  </h4>
                  <ul className="icon_list unordered_list_block">
                    <li>
                      <span className="list_item_icon">
                        <i className="fas fa-circle"></i>
                      </span>
                      <span className="list_item_text">
                        <strong className="faime_list_item">
                          Abusive users
                        </strong>
                        : Terms and Conditions agreements allow you to establish
                        what constitutes appropriate activity on your site or
                        app, empowering you to remove abusive users and content
                      </span>
                    </li>
                    <li>
                      <span className="list_item_icon">
                        <i className="fas fa-circle"></i>
                      </span>
                      <span className="list_item_text">
                        <strong className="faime_list_item">
                          Intellectual property theft
                        </strong>
                        : Asserting your claim to the creative assets of your
                        site in your terms and conditions will prevent ownership
                        disputes and copyright infringement.
                      </span>
                    </li>
                    <li>
                      <span className="list_item_icon">
                        <i className="fas fa-circle"></i>
                      </span>
                      <span className="list_item_text">
                        <strong className="faime_list_item">
                          Potential litigation:
                        </strong>{" "}
                        If a user lodges a legal complaint against your
                        business, showing that they were presented with clear
                        terms and conditions before they used your site will
                        help you immensely in court.
                      </span>
                    </li>
                  </ul>
                  <h4 className="info_title">To Set Liabilities Limits</h4>
                  <p>
                    Almost every terms and conditions agreement has a warranty
                    or limitations of liability disclaimer. We’ll cover it in
                    more detail in our section about{" "}
                    <Link className="link" href="/policy-privacy">
                      what clauses to include in your terms and conditions
                    </Link>
                    , but this clause essentially limits what customers can hold
                    you liable for.
                  </p> */}


                  {/* <h4 className="info_title">
                    To Outline Policies and Avoid Abusive Behavior
                  </h4>
                  <p className="mb-1">
                    You may direct questions, comments or reports to:
                  </p>
                  <p>
                    <Link
                      className="author_mail"
                      href="mailto:howdy@paradox.com"
                    >
                      howdy@faime.com
                    </Link>
                  </p>
                  <h4 className="info_title">
                    Revisions to this Teams & Condition without Notice
                  </h4>
                  <p className="mb-0">
                    This Privacy Policy is dynamic. It will continually change.
                    You may not assume that it remains the same and you agree to
                    check the policy each time you visit the site for changes.
                    Unless, in the sole opinion of the website, this policy
                    changes so drastically as to suggest a posted notification
                    on the site or via email, you will receive no notification
                    of changes to this Privacy Policy nor, under any
                    circumstances, does this site promise notification. Your
                    continued use of this site always evidences your acceptance
                    of the terms this Privacy Policy or any modifications.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityControl;
