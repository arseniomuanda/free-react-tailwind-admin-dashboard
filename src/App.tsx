import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import Videos from "./pages/UiElements/Videos";
import Images from "./pages/UiElements/Images";
import Alerts from "./pages/UiElements/Alerts";
import Badges from "./pages/UiElements/Badges";
import Avatars from "./pages/UiElements/Avatars";
import Buttons from "./pages/UiElements/Buttons";
import LineChart from "./pages/Charts/LineChart";
import BarChart from "./pages/Charts/BarChart";
import Calendar from "./pages/Calendar";
import BasicTables from "./pages/Tables/BasicTables";
import FormElements from "./pages/Forms/FormElements";
import Blank from "./pages/Blank";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import Saas from "./pages/Dashboard/Saas";
import Finance from "./pages/Dashboard/Finance";
import Sales from "./pages/Dashboard/Sales";
import TextGenerator from "./pages/AiAssistant/TextGenerator";
import Chat from "./pages/Chat/Chat";
import LayoutOne from "./pages/Layouts/LayoutOne";
import LayoutTwo from "./pages/Layouts/LayoutTwo";
import LayoutThree from "./pages/Layouts/LayoutThree";
import LayoutFour from "./pages/Layouts/LayoutFour";
import LayoutFive from "./pages/Layouts/LayoutFive";
import LayoutSix from "./pages/Layouts/LayoutSix";
import Inbox from "./pages/Inbox/Inbox";
import InboxDetails from "./pages/Inbox/InboxDetails";
import SupportTickets from "./pages/Support/SupportTickets";
import SupportTicketReply from "./pages/Support/SupportTicketReply";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/saas" element={<Saas />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/text-generator" element={<TextGenerator />} />

            {/* Chat */}
            <Route path="/chat" element={<Chat />} />

            {/* Email */}
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/inbox-details" element={<InboxDetails />} />

            {/* Support */}
            <Route path="/support-tickets" element={<SupportTickets />} />
            <Route path="/support-ticket-reply" element={<SupportTicketReply />} />

            {/* Layouts */}
            <Route path="/layout-one" element={<LayoutOne />} />
            <Route path="/layout-two" element={<LayoutTwo />} />
            <Route path="/layout-three" element={<LayoutThree />} />
            <Route path="/layout-four" element={<LayoutFour />} />
            <Route path="/layout-five" element={<LayoutFive />} />
            <Route path="/layout-six" element={<LayoutSix />} />

            {/* Others Page */}
            <Route path="/profile" element={<UserProfiles />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/blank" element={<Blank />} />

            {/* Forms */}
            <Route path="/form-elements" element={<FormElements />} />

            {/* Tables */}
            <Route path="/basic-tables" element={<BasicTables />} />

            {/* Ui Elements */}
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/avatars" element={<Avatars />} />
            <Route path="/badge" element={<Badges />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/images" element={<Images />} />
            <Route path="/videos" element={<Videos />} />

            {/* Charts */}
            <Route path="/line-chart" element={<LineChart />} />
            <Route path="/bar-chart" element={<BarChart />} />
          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
