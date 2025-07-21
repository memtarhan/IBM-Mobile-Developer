import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import 'edit_student_screen.dart';
import 'student_provider.dart';

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Student List')),
      body: Consumer<StudentProvider>(
        builder: (context, provider, child) {
          return ListView.builder(
            itemCount: provider.students.length,
            itemBuilder: (context, index) {
              final student = provider.students[index];
              return ListTile(
                title: Text('${student.firstName} ${student.lastName}'),
                subtitle: Text('Age: ${student.age} - Major: ${student.major}'),
                onTap: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (context) => EditStudentScreen(student: student),
                    ),
                  );
                },
              );
            },
          );
        },
      ),

      floatingActionButton: FloatingActionButton(
        onPressed: () {
          Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => EditStudentScreen()),
          );
        },
        tooltip: 'Add Student',
        child: Icon(Icons.add),
      ),
    );
  }
}
