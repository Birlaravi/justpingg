import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import TopBar from '../components/TopBar';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <TopBar />

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.heading}>About Us</Text>

        {/* Mission & Values */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Mission & Values</Text>
          <Text style={styles.sectionText}>
            At JustPing, our team is driven by a shared mission to empower
            businesses across India by enhancing their digital presence and
            discoverability. We believe in collaboration, innovation, and
            integrity—fostering a culture where ideas thrive, and every team
            member contributes to building a more connected business ecosystem.
            Our values center around transparency, customer satisfaction, and
            continuous growth.
          </Text>
        </View>

        {/* Founder & CEO */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Founder & CEO</Text>
          <View style={styles.teamMember}>
            <Image
              source={{ uri: 'https://justping.com/justping-front/img/team/founder.png' }}
              style={styles.profileImage}
            />
            <View style={styles.textContent}>
              <Text style={styles.personName}>Mr. Syed Shahab</Text>
              <Text style={styles.sectionText}>
                As CEO, Mr. Shahab steers the organization toward its strategic
                goals, overseeing visionary leadership, meticulous planning, and
                innovative thinking. He sets long-term objectives, manages budgets,
                secures sponsorships, and ensures every event aligns with the
                company’s brand identity and client expectations.
              </Text>
            </View>
          </View>
        </View>

        {/* Leadership */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Leadership Team</Text>
          <View style={styles.teamMember}>
            <Image
              source={{ uri: 'https://justping.com/justping-front/img/team/tanvi.png' }}
              style={styles.profileImage}
            />
            <View style={styles.textContent}>
              <Text style={styles.personName}>Tanishka Mavi, Business Head</Text>
              <Text style={styles.sectionText}>
                Leads growth and strategy, empowering local businesses and driving
                the platform’s expansion across India.
              </Text>
            </View>
          </View>
        </View>

        {/* Our Team */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Team</Text>

          <Text style={styles.personName}>Renu, Web Developer</Text>
          <Text style={styles.sectionText}>
            Versatile full-stack developer with 7+ years building responsive
            web apps and scalable backends. Passionate about clean code, UI/UX,
            and real-world problem solving.
          </Text>

          <Text style={styles.personName}>
            Himanshu Chauhan, Digital Marketing Executive
          </Text>
          <Text style={styles.sectionText}>
            Skilled in SEO, social media, and content marketing. Drives online
            growth through innovative strategies and impactful campaigns.
          </Text>

          <Text style={styles.personName}>
            Nikita Kumari Sahu, Marketing Executive
          </Text>
          <Text style={styles.sectionText}>
            Expert in strategic brand promotion and market-trend analysis.
            Known for creativity, sharp communication, and delivering results.
          </Text>

          <Text style={styles.personName}>
            Vikrant Pandey, Graphics & Print Designer
          </Text>
          <Text style={styles.sectionText}>
            Talented designer recognized for creativity and punctuality. Creates
            eye-catching designs across print and digital platforms.
          </Text>

          <Text style={styles.personName}>Kanika, Sales Head</Text>
          <Text style={styles.sectionText}>
            Leads the sales team, driving client acquisition and revenue growth.
          </Text>

          <Text style={styles.personName}>Zakiya Zafar, Sales Executive</Text>
          <Text style={styles.sectionText}>
            Exceptional communicator focused on client relationships and revenue
            growth.
          </Text>
        </View>

        {/* Platform Overview */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Platform Overview</Text>
          <Text style={styles.sectionText}>
            JustPing.com is India’s leading business-listing platform,
            connecting businesses with potential customers nationwide. List
            your business and expand your reach today!
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 16, paddingBottom: 32 },
  heading: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 16,
    color: '#e91e63',
    textAlign: 'center',
  },
  section: { marginBottom: 24 },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  sectionText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
  },
  personName: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 12,
    color: '#222',
  },
  teamMember: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 8,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 12,
    marginTop: 4,
  },
  textContent: {
    flex: 1,
  },
});

export default AboutScreen;
