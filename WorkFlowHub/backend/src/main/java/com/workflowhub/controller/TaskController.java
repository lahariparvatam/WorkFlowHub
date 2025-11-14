package com.workflowhub.controller;

import com.workflowhub.model.Task;
import com.workflowhub.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/tasks")
public class TaskController {

    @Autowired
    private TaskRepository taskRepo;

    @GetMapping
    public List<Task> getAllTasks() {
        return taskRepo.findAll();
    }

    @PostMapping
    public Task createTask(@RequestBody Task task) {
        task.setCreatedAt(LocalDateTime.now());
        if (task.getStatus() == null) task.setStatus("Pending");
        return taskRepo.save(task);
    }

    @PutMapping("/{id}")
    public Task updateTask(@PathVariable Long id, @RequestBody Task updatedTask) {
        Task existing = taskRepo.findById(id).orElseThrow(() -> new RuntimeException("Task not found"));
        existing.setTitle(updatedTask.getTitle());
        existing.setDescription(updatedTask.getDescription());
        existing.setAssignedTo(updatedTask.getAssignedTo());
        existing.setStatus(updatedTask.getStatus());
        return taskRepo.save(existing);
    }

    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Long id) {
        taskRepo.deleteById(id);
    }
}
