// Copyright 2020 Google Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as React from "react"
import Typography from "@material-ui/core/Typography"

import Layout from "../../components/layout"

const SpreadsheetAddOn = () => {
  return <Layout title="Spreadsheet Add-on">
    <Typography variant="h2">Overview</Typography>

    <Typography variant="body1">
    <p>The <a href="https://developers.google.com/analytics/solutions/google-analytics-spreadsheet-add-on">Google Analytics Spreadsheet Add-on</a> makes it easier for Google Analytics users to access, visualize, share, and manipulate their data in Google Spreadsheets. The add-on gives you the full power of the Google Analytics <a href="https://developers.google.com/analytics/devguides/reporting/">Core and Multi-Channel Funnels Reporting APIs</a> without requiring you to know or write any code.</p>

    <p>With this tool, you can:</p>

      <ul>
        <li>Query data from multiple views.</li>
        <li>Create custom calculations from your report data.</li>
        <li>Create visualizations with the built-in visualization tools, and embed those visualizations on third-party websites.</li>
        <li>Schedule your reports to run and update automatically.</li>
        <li>Easily control who can see your data and visualizations by leveraging Google Spreadsheet's existing sharing and privacy features.</li>
      </ul>
      </Typography>
      <Typography variant="h2">Learn More</Typography>

      <Typography variant="body1">
      <p>To start using the Google Analytics Spreadsheet add-on you can simply download it from the <a href="{{ project.external.url }}">Chrome Web Store</a> and try adding it to one of your spreadsheets today.</p>

      <p>If you have questions, check out the <a href="https://developers.google.com/analytics/solutions/google-analytics-spreadsheet-add-on">solution guide</a> which explains how to install and use the add-on and goes over each option in detail.</p>
      </Typography>
  </Layout>
}
export default SpreadsheetAddOn
