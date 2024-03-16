import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class PortfolioGUI {
    private JFrame frame;
    private JPanel projectsPanel;
    private JTextField nameField;
    private JTextField emailField;
    private JTextArea messageArea;

    public PortfolioGUI() {
        // Create the main window
        frame = new JFrame("Mohammed ElManakhly - Portfolio");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setLayout(new BoxLayout(frame.getContentPane(), BoxLayout.Y_AXIS));

        // Header
        JLabel headerLabel = new JLabel("Mohammed ElManakhly");
        headerLabel.setAlignmentX(Component.CENTER_ALIGNMENT);
        frame.add(headerLabel);

        // About Me Section
        JTextArea aboutMeText = new JTextArea("Hello! I’m embarking on a new chapter in my professional life, transitioning from my previous career into the dynamic world of cybersecurity.");
        aboutMeText.setWrapStyleWord(true);
        aboutMeText.setLineWrap(true);
        aboutMeText.setEditable(false);
        frame.add(aboutMeText);

        // Projects Section
        projectsPanel = new JPanel();
        projectsPanel.setLayout(new BoxLayout(projectsPanel, BoxLayout.Y_AXIS));
        addProject("Project 1", "Description of your first project.");
        addProject("Project 2", "Description of your second project.");
        frame.add(projectsPanel);

        // Toggle Button for Project Descriptions
        JButton toggleButton = new JButton("Toggle Project Descriptions");
        toggleButton.setAlignmentX(Component.CENTER_ALIGNMENT);
        toggleButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                for (Component comp : projectsPanel.getComponents()) {
                    comp.setVisible(!comp.isVisible());
                }
            }
        });
        frame.add(toggleButton);

        // Contact Form
        nameField = new JTextField("Your Name");
        emailField = new JTextField("Your Email");
        messageArea = new JTextArea("Your Message");
        JButton submitButton = new JButton("Send Message");
        submitButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                if (nameField.getText().isEmpty() || emailField.getText().isEmpty() || messageArea.getText().isEmpty()) {
                    JOptionPane.showMessageDialog(frame, "Please fill out all fields.", "Validation Error", JOptionPane.ERROR_MESSAGE);
                } else {
                    JOptionPane.showMessageDialog(frame, "Message sent!", "Success", JOptionPane.INFORMATION_MESSAGE);
                }
            }
        });

        frame.add(nameField);
        frame.add(emailField);
        frame.add(messageArea);
        frame.add(submitButton);

        // Footer
        JLabel footerLabel = new JLabel("© 2024 Mohammed ElManakhly");
        footerLabel.setAlignmentX(Component.CENTER_ALIGNMENT);
        frame.add(footerLabel);

        // Display the window
        frame.pack();
        frame.setVisible(true);
    }

    private void addProject(String title, String description) {
        JLabel titleLabel = new JLabel(title);
        JTextArea descriptionArea = new JTextArea(description);
        descriptionArea.setWrapStyleWord(true);
        descriptionArea.setLineWrap(true);
        descriptionArea.setEditable(false);
        projectsPanel.add(titleLabel);
        projectsPanel.add(descriptionArea);
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            @Override
            public void run() {
                new PortfolioGUI();
            }
        });
    }
}

